import JSZip from 'jszip'
import FileSaver from 'file-saver'

export default class {
  constructor(originalFiles, newFiles) {
    this.original = {
      files: originalFiles,
      filesData: {
        commonEvents: null,
        map: [],
      },
      events: [],
    }
    this.new = {
      files: newFiles,
      events: [],
    }
    this._eventsMap = {}
    this._regex = null
  }

  set regex(pattern) {
    this._regex = new RegExp(pattern, 'i')
  }

  get eventsMap() {
    return this._eventsMap
  }

  async parse() {
    await Promise.all([
      (async () => { this.original.eventsSet = await this.getEventsSet(this.original.files) })(),
      (async () => { this.new.eventsSet = await this.getEventsSet(this.new.files) })(),
    ])

    this._eventsMap = this.getEventsMap()
  }

  async getEventsSet(files) {
    const commonEventsSet = await this.getCommonEventsSet(this.getCommonEventsFile(files))

    let eventsSet = commonEventsSet
    for (const file of this.getMapEventsFile(files)) {
      const mapEventsSet = await this.getMapEvents(file)
      eventsSet = new Set([...eventsSet, ...mapEventsSet])
    }

    return eventsSet
  }

  getCommonEventsFile(files) {
    return files.find(file => {
      return /CommonEvents/.test(file.name)
    })
  }

  async getCommonEventsSet(file) {
    let eventsSet = new Set()

    if (file) {
      let json = {}
      await this.readFile(file).then(result => {
        this.original.filesData.commonEvents = {
          name: file.name,
          data: result,
        }
        json = JSON.parse(result)
      })

      json.forEach(obj => {
        if (obj != undefined && obj.list) {
          obj.list.forEach(item => {
            if (item.parameters.length && this.isImageName(item.parameters[1])) {
              eventsSet.add(item.parameters[1])
            }
          })
        }
      })
    }
    return eventsSet
  }

  getMapEventsFile(files) {
    return files.filter(file => {
      return /Map\d+/.test(file.name)
    })
  }

  async getMapEvents(file) {
    let eventsSet = new Set()

    if (file) {
      let json = {}
      await this.readFile(file).then(result => {
        this.original.filesData.map.push({
          name: file.name,
          data: result,
        })
        json = JSON.parse(result)
      })

      json.events.forEach(event => {
        if (event) {
          event.pages.forEach(page => {
            page.list.forEach(item => {
              if (item.parameters.length && this.isImageName(item.parameters[1])) {
                eventsSet.add(item.parameters[1])
              }
            })
          })
        }
      })
    }

    return eventsSet
  }

  isImageName(string) {
    return this._regex.test(string)
  }

  getEventsMap() {
    let eventsMap = {}
    const originalEvents = [...this.original.eventsSet]
    const newEvents = [...this.new.eventsSet]
    for (let i = 0; i < originalEvents.length; i++) {
      eventsMap[originalEvents[i]] = {
        newEvent: newEvents[i],
        diff: null,
      }
    }
    eventsMap = this.sortObject(eventsMap)
    return eventsMap
  }

  // https://stackoverflow.com/questions/5467129/sort-javascript-object-by-key
  sortObject(object) {
    const ordered = Object.keys(object).sort().reduce((obj, key) => {
      obj[key] = object[key]
      return obj
    }, {})
    return ordered
  }

  downloadReplacedFiles() {
    return new Promise(resolve => {
      let zip = new JSZip()
      if (this.original.filesData.commonEvents) {
        zip.file(this.original.filesData.commonEvents.name, JSON.stringify(this.getReplacedCommonEvents()))
      }

      this.original.filesData.map.forEach(file => {
        zip.file(file.name, JSON.stringify(this.getReplacedMap(file.data)))
      })

      zip.generateAsync({ type: 'blob' }).then(function(content) {
        FileSaver.saveAs(content, 'result.zip')
        return resolve()
      })
    })
  }

  getReplacedCommonEvents() {
    let json = JSON.parse(this.original.filesData.commonEvents.data)
    json.forEach(obj => {
      if (obj != undefined && obj.list) {
        obj.list.forEach(item => {
          if (item.parameters.length && this.isImageName(item.parameters[1])) {
            item.parameters[1] = this._eventsMap[item.parameters[1]].newEvent
          }
        })
      }
    })

    return json
  }

  getReplacedMap(data) {
    let json = JSON.parse(data)
      json.events.forEach(event => {
        if (event) {
          event.pages.forEach(page => {
            page.list.forEach(item => {
              if (item.parameters.length && this.isImageName(item.parameters[1])) {
                item.parameters[1] = this._eventsMap[item.parameters[1]].newEvent
              }
            })
          })
        }
      })

    return json
  }

  readFile(file) {
    return new Promise(resolve => {
      var fr = new FileReader()
      fr.onload = () => {
        resolve(fr.result)
      }
      if (file.file) {
        fr.readAsText(file.file)
      } else { // for the example file because it is create by File API directly
        fr.readAsText(file)
      }
    })
  }
}