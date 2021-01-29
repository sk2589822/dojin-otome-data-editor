<template>
  <div class="w-50">
    <h3 class="text-center">
      {{ title }}
    </h3>
    <div
      :class="['drop-zone', { 'dark': isDragover }]"
      @dragenter="dragenter"
      @dragleave="dragleave"
      @drop="drop"
    >
      <FileUpload
        ref="upload"
        v-model="baseUploadFiles"
        :name="name"
        :multiple="true"
        :directory="true"
        :drop="true"
        @input-file="inputFile"
        @input-filter="inputFilter"
      >
        點擊或拖曳上傳資料夾
      </FileUpload>
    </div>
    <div class="p-2 text-center">
      已上傳 {{ baseUploadFiles.length }} 個檔案
    </div>
    <p
      v-if="isFileTypeError"
      class="text-center text-danger"
    >
      請上傳.{{ extension }}檔
    </p>
    <p class="text-center">
      <b-button
        variant="danger"
        @click="clear"
      >
        清除
      </b-button>
    </p>
  </div>
</template>

<script>
import VueUploadComponent from 'vue-upload-component'

export default {
  components: {
    FileUpload: VueUploadComponent,
  },
  props: {
    extension: {
      type: String,
      default: '',
    },
    name: {
      type: String,
      default: 'upload',
    },
    title: {
      type: String,
      default: 'data資料夾',
    },
  },
  data() {
    return {
      baseUploadFiles: [],
      isDragover: false,
      dargCounter: 0,
      isFileTypeError: false,
    }
  },
  methods: {
    inputFile(file) {
      file.blob = ''
      let URL = window.URL || window.webkitURL
      if (URL && URL.createObjectURL) {
        file.blob = URL.createObjectURL(file.file)
      }

      this.$emit('update:uploadFiles', this.baseUploadFiles)
    },
    inputFilter(...[file, , prevent]) {
      const regex = new RegExp(`\\.${this.extension}$`, 'i')
      if (regex.test(file.name)) {
        this.isFileTypeError = false
      } else {
        this.isFileTypeError = true
        return prevent()
      }
    },
    dragenter() {
      this.dargCounter++
      this.isDragover = true
    },
    dragleave() {
      this.dargCounter--
      if (this.dargCounter === 0) {
          this.isDragover = false
      }
    },
    drop() {
      this.dargCounter = 0
      this.isDragover = false
    },
    clear() {
      this.baseUploadFiles.splice(0)
      this.$emit('update:uploadFiles', this.baseUploadFiles)
    },
  },
}
</script>

<style lang="scss">
.drop-zone {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 10px;
  border: 2px dashed #000;
  border-radius: 10px;
  background: rgb(194, 235, 245);

  &.dark {
    background: rgb(160, 190, 255);
  }
}

.file-uploads {
  padding: 3rem;
  width: 100%;
}
</style>