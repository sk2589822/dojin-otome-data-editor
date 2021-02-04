<template>
  <div class="main w-100">
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
      <div class="mt-4">
        <div>
          <label
            for="size-input"
          >
            圖片尺寸：
          </label>
          <b-form-input
            id="size-input"
            :value="size"
            placeholder="輸入圖片大小"
            @blur="size = $event.target.value"
          />
        </div>
        <p class="mt-4 w-100 text-left text-secondary">
          ※改圖片尺寸後隨便點一下其他地方即會套用
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
    <template v-if="isParsed">
      <div class="d-flex justify-content-end mt-5">
        <div class="mr-2 text-right">
          <label for="diffThreshold-input">
            閾值：
          </label>
          <b-form-input
            id="diffThreshold-input"
            v-model="diff.threshold.input"
            class="d-inline-block w-20"
            placeholder="輸入閾值"
          />
        </div>
        <b-button
          variant="primary"
          class="mr-4"
          @click="diff.threshold.value = parseInt(diff.threshold.input)"
        >
          確定
        </b-button>
        <b-button-group v-if="diff.isShow && isDiffComputed">
          <b-button
            variant="danger"
            @click="filterRowsOverThreshold"
          >
            只顯示差異度≧閾值的項目
          </b-button>
          <b-button
            variant="success"
            @click="diff.threshold.isFilterRows = false"
          >
            顯示全部項目
          </b-button>
        </b-button-group>
        <b-button
          v-else
          variant="danger"
          class="w-15"
          @click="diff.isShow = true"
        >
          <template v-if="diff.isShow">
            <b-spinner
              label="Spinning"
            />
            <br>
            {{ diff.computedCount }} / {{ Object.keys(eventsProcessor.eventsMap).length }}
          </template>
          <span v-else>
            計算差異度
          </span>
        </b-button>
      </div>
      <p class="mt-4 w-100 text-right text-secondary">
        ※點「確定」後會立即反應到背景顏色，但要過濾掉差異度≧閾值的項目必須再點一次「只顯示差異度≧閾值的項目」
      </p>
      <div class="info-list-container mt-4">
        <table class="info-list">
          <tr>
            <th class="w-15">
              original image name
            </th>
            <th class="w-20">
              filter / select
            </th>
            <th class="w-15">
              new image name
            </th>
            <th>original image</th>
            <th>new image</th>
            <th class="w-10">
              image diff (%)
            </th>
          </tr>
          <tr
            is="EditorRow"
            v-for="(item, key) in eventsProcessor.eventsMap"
            ref="rows"
            :key="key"
            :original-image-name="key"
            :new-image-name.sync="eventsProcessor.eventsMap[key].newEvent"
            :diff.sync="eventsProcessor.eventsMap[key].diff"
            :is-show-diff="diff.isShow"
            :threshold="diff.threshold.value"
            @onDiffComputed="diff.computedCount++"
          />
        </table>
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
      diff: {
        isShow: false,
        computedCount: 0,
        threshold: {
          input: 10,
          value: 10,
          isFilterRows: false,
        },
      },
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
    isDiffComputed() {
      return this.diff.computedCount === Object.keys(this.eventsProcessor.eventsMap).length
    },
  },
  methods: {
    setRegex(pattern) {
      if (pattern) {
        this.regex = pattern.toString().split('/').slice(1,-1).join('')
      }
    },
    async parse() {
      this.imagesMap = this.getImagesMap()
      this.imagesNames = Object.keys(this.imagesMap)

      if (!this.referenceFiles.length) {
        this.referenceFiles = this.baseFiles
      }
      this.eventsProcessor = new DojinOtomeDataParser(this.baseFiles, this.referenceFiles)
      this.eventsProcessor.regex = this.regex

      this.initValueBeforeParse()
      await this.eventsProcessor.parse()
      this.setValueAfterParseed()
    },
    initValueBeforeParse() {
      this.isParsed = false
      this.isParsing = true
      this.diff.computedCount = 0
    },
    setValueAfterParseed() {
      this.isParsing = false
      this.isParsed = true
      this.diff.isShow = false
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
    filterRowsOverThreshold() {
      this.diff.threshold.isFilterRows = true
      this.$refs.rows.forEach(row => { row.setIsShow() })
    },
    async download() {
      this.isDownloading = true
      await this.eventsProcessor.downloadReplacedFiles()
      this.isDownloading = false
    },
    async loadExample() {
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

      this.eventsProcessor = new DojinOtomeDataParser([example_1], [example_2])
      this.eventsProcessor.regex = ''

      this.initValueBeforeParse()
      await this.eventsProcessor.parse()
      this.setValueAfterParseed()
    },
  },
}
</script>

<style lang="scss">
.w-10 {
  width: 10% !important;
}

.w-15 {
  width: 15% !important;
}

.w-20 {
  width: 20% !important;
}

.main {
  padding: 2% 20% 5%;
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
  display: flex;
  justify-content: center;
}

.info-list {
  flex: 1;
  border: 1px solid #000;
  padding: 0;

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
</style>