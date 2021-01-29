<template>
  <BaseUpload
    :upload-files.sync="uploadFiles"
    :name="name"
    :title="title"
    extension="png"
  />
</template>

<script>
import BaseUpload from '@/components/BaseUpload'

export default {
  components: {
    BaseUpload,
  },
  props: {
    name: {
      type: String,
      default: 'upload',
    },
    title: {
      type: String,
      default: '圖片檔',
    },
  },
  data() {
    return {
      uploadFiles: [],
    }
  },
  watch: {
    uploadFiles() {
      this.$emit('update:images', this.uploadFiles)
    },
  },
}
</script>