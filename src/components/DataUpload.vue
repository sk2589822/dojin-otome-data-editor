<template>
  <BaseUpload
    :upload-files.sync="uploadFiles"
    :name="name"
    :title="title"
    extension="json"
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
      default: 'data',
    },
  },
  data() {
    return {
      uploadFiles: [],
    }
  },
  watch: {
    uploadFiles() {
      this.$emit('update:files', this.uploadFiles)
    },
  },
}
</script>