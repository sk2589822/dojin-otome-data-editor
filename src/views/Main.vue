<template>
  <div class="main w-100">
    <section class="padding-x-20">
      <h3 class="text-center">
        麻煩請先看
        <router-link to="Instruction">
          使用教學
        </router-link>
      </h3>
      <div class="upload-container">
        <DataUpload
          :files.sync="baseFiles"
          name="baseFiles"
          :title="'日文版data'"
        />
        <DataUpload
          :files.sync="referenceFiles"
          name="referenceFiles"
          :title="'中文/英文版data'"
        />
      </div>
      <div class="upload-container">
        <ImageUpload
          :images.sync="images"
          name="images"
          :title="'圖片檔'"
        />
      </div>
      <div class="mt-2">
        <div>
          <label
            class="mt-4"
          >
            選擇遊戲：
          </label>
          <b-form-select
            v-model="selectedGame"
            :options="games"
            @change="setRegex(regexMap[$event])"
          />
        </div>
        <div>
          <label
            for="regex-input"
            class="mt-4"
          >
            正規表示式：
          </label>
          <b-form-input
            id="regex-input"
            v-model="regex"
            :disabled="!isManualInputRegex"
            :placeholder="isManualInputRegex ? '輸入正規表示式' : '選擇遊戲以取得對應的正規表示式'"
          />
        </div>
        <div class="d-flex flex-wrap mt-4">
          <div class="pr-4 w-50">
            <label
              for="diffThreshold-input"
            >
              閾值(差異度≧閾值的項目會變色)：
            </label>
            <b-form-input
              id="diffThreshold-input"
              :value="diffThreshold"
              placeholder="輸入閾值"
              @blur="onDiffThresholdInputBlur($event)"
            />
          </div>
          <div class="pl-4 w-50">
            <label
              for="size-input"
            >
              圖片尺寸：
            </label>
            <b-form-input
              id="size-input"
              :value="size"
              placeholder="輸入圖片大小"
              @blur="onSizeInputBlur($event)"
            />
          </div>
          <p class="mt-4 w-100 text-left text-secondary">
            ※解析完之後如果有改上方的值，改完之後請隨便點一下其他地方，數值才會更新
          </p>
        </div>
      </div>
      <div class="d-flex flex-wrap justify-content-center mt-4 mx-auto w-50">
        <b-button
          variant="warning"
          class="w-75"
          @click="loadExample"
        >
          使用範例檔案解析
        </b-button>
        <b-button
          variant="primary"
          :class="['w-75 mt-4', { 'disabled': !isReadyToParse }]"
          @click="isReadyToParse && parse()"
        >
          <b-spinner
            v-show="isParsing"
            variant="light"
            label="Spinning"
          />
          <span v-show="!isParsing">
            解析
          </span>
        </b-button>
        <b-button
          v-if="isParsed"
          variant="primary"
          class="w-75 mt-4"
          @click="download"
        >
          <b-spinner
            v-show="isDownloading"
            variant="light"
            label="Spinning"
          />
          <span v-show="!isDownloading">
            產生檔案
          </span>
        </b-button>
      </div>
    </section>

    <template v-if="isParsed">
      <div class="info-list-container text-center mx-auto mt-4">
        <p class="text-right mt-5">
          <b-button-group>
            <b-button
              variant="danger"
              @click="filterEditorRows"
            >
              過濾差異度＜閾值的項目
            </b-button>
            <b-button
              variant="success"
              @click="resetEditorRows"
            >
              顯示全部項目
            </b-button>
          </b-button-group>
        </p>
        <q-virtual-scroll
          type="table"
          class="info-list"
          :virtual-scroll-item-size="size"
          :virtual-scroll-sticky-size-start="48"
          :items="editorRows"
        >
          <template v-slot:before>
            <template>
              <thead class="thead-sticky text-center">
                <tr>
                  <th class="width-15">
                    original image name
                  </th>
                  <th class="width-20">
                    filter / select
                  </th>
                  <th class="width-15">
                    new image name
                  </th>
                  <th>original image</th>
                  <th>new image</th>
                  <th class="width-10">
                    image diff (%)
                  </th>
                </tr>
              </thead>
            </template>
          </template>

          <template v-slot="{ item: row }">
            <tr
              is="EditorRow"
              :key="row.key"
              :original-image-name="row.key"
              :new-image-name.sync="eventsProcessor.eventsMap[row.key].newEvent"
              :diff.sync="eventsProcessor.eventsMap[row.key].diff"
            />
          </template>
        </q-virtual-scroll>
      </div>
    </template>
  </div>
</template>

<script>

import DataUpload from '@/components/DataUpload'
import ImageUpload from '@/components/ImageUpload'
import EditorRow from '@/components/EditorRow'
import DojinOtomeDataParser from '@/js/dojinOtome/eventsProcessor.js'

export default {
  components: {
    DataUpload,
    ImageUpload,
    EditorRow,
  },
  data() {
    return {
      baseFiles: [],
      referenceFiles: [],
      images: [],
      imagesMap: {},
      imagesNames: [],
      selectedGame: null,
      games: [
        {
          value: null,
          text: '選擇一款遊戲',
          disabled: true,
        },
        {
          value: 'succumate',
          text: 'サキュメイト / Succumate / 與魅魔莉莉姆的同居生活',
        },
        {
          value: 'summerMemories',
          text: 'あまえんぼ / Summer Memories / 夏日狂想曲：鄉間的難忘回憶',
        },
        {
          value: 'manual',
          text: '我想自己寫正規表示式',
        },
      ],
      regex: '',
      regexMap: {
        succumate: /_0\d+/,
        summerMemories: /(?<!E結衣2_表情H)_0\d+|フェラカットイン\(美雪\)_\d|Blow cut-in \(Miyuki\)_\d/,
        manual: null,
      },
      eventsProcessor: null,
      isParsing: false,
      isParsed: false,
      diffThreshold: 10,
      editorRows: [],
      size: 175,
      isDownloading: false,
      showExample: false,
    }
  },
  computed: {
    isReadyToParse() {
      return this.baseFiles.length && this.images.length && this.selectedGame
    },
    isManualInputRegex() {
      return this.selectedGame === 'manual'
    },
  },
  methods: {
    setRegex(pattern) {
      if (pattern) {
        this.regex = pattern.toString().split('/').slice(1,-1).join('')
      }
    },
    async parse() {
      this.isParsed = false
      this.isParsing = true

      this.imagesMap = this.getImagesMap()
      this.imagesNames = Object.keys(this.imagesMap)

      this.setVuexData()

      if (!this.referenceFiles.length) {
        this.referenceFiles = this.baseFiles
      }
      this.eventsProcessor = new DojinOtomeDataParser(this.baseFiles, this.referenceFiles)
      this.eventsProcessor.regex = this.regex

      await this.eventsProcessor.parse()
      this.resetEditorRows()

      this.isParsing = false
      this.isParsed = true
    },
    setVuexData() {
      this.$store.commit('setImagesMap', this.imagesMap)
      this.$store.commit('setImagesNames', this.imagesNames)
      this.$store.commit('setDiffThreshold', this.diffThreshold)
      this.$store.commit('setSize', this.size)
    },
    getImagesMap() {
      let map = {}
      for (let image of this.images) {
        // remove "/"" and extension
        let key = image.name
          .split('/').slice(-1)[0]
          .split('.').slice(0, -1).join('.')

        map[key] =  {
          blob: image.blob,
          file: image.file,
        }
      }
      return map
    },
    filterEditorRows() {
      this.editorRows = []
      for (const [key, item] of Object.entries(this.eventsProcessor.eventsMap)) {
        if (item.diff >= this.diffThreshold) {
          this.editorRows.push({
            key,
          })
        }
      }
    },
    resetEditorRows() {
      this.editorRows = Object.keys(this.eventsProcessor.eventsMap).map(key => ({ key }))
    },
    onDiffThresholdInputBlur(event) {
      this.diffThreshold = event.target.value
      this.$store.commit('setDiffThreshold', this.diffThreshold)
    },
    onSizeInputBlur(event) {
      this.size = event.target.value
      this.$store.commit('setSize', this.size)
    },
    async download() {
      this.isDownloading = true
      await this.eventsProcessor.downloadReplacedFiles()
      this.isDownloading = false
    },
    async loadExample() {
      this.isParsed = false
      this.isParsing = true

      let example_1 = new File([new Blob([JSON.stringify(require('@/assets/example_map_1.json'), null, 2)], {type : 'application/json'})], 'Map1.json')
      let example_2 = new File([new Blob([JSON.stringify(require('@/assets/example_map_2.json'), null, 2)], {type : 'application/json'})], 'Map2.json')
      Array.from({length: 5}, (v, i) => i + 1).forEach(i => {
        const name = `example_${i}`
        const file = require(`@/assets/images/${name}.png`)
        this.imagesNames.push(name)
        this.imagesMap[name] = {
          file,
          blob: file,
        }
      })

      this.setVuexData()

      this.eventsProcessor = new DojinOtomeDataParser([example_1], [example_2])
      this.eventsProcessor.regex = ''

      await this.eventsProcessor.parse()
      this.resetEditorRows()

      this.isParsing = false
      this.isParsed = true
    },
  },
}
</script>

<style lang="scss">
.main {
  padding: 2% 0 5%;
}

.padding-x-20 {
  padding-right: 20%;
  padding-left: 20%;
}

.upload-container {
  display: flex;
  justify-content: center;
  width: 100%;

  &:not(:first-child) {
    margin-top: 1em;
  }
}

.btn.disabled {
  cursor: not-allowed !important;
}

.info-list-container {
  width: 80%;
}

.info-list {
  max-height: 800px;

  th,
  td {
    text-align: center;
  }

  img {
    width: 175px;
    height: 175px;
    object-fit: contain;
  }
}

.thead-sticky > tr > th {
  position: sticky;
  opacity: 1;
  z-index: 1;
  background: #000;
  color: #fff;
}

.thead-sticky tr:last-child > * {
  top: 0;
}
</style>