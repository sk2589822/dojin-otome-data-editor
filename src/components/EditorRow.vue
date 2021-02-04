<template>
  <tr :class="[ 'item', { 'over-threshold': diff >= $parent.diffThreshold }]">
    <td>
      <span>{{ originalImageName }}</span>
    </td>
    <td class="text-center">
      <input
        v-model="filter"
        type="text"
        @input="autoSelectImage"
      >
      <select
        v-if="filter"
        :value="selectedImageName"
        class="d-block mx-auto mt-2 w-100"
        @change="updateImage($event.target.value)"
      >
        <option
          v-for="item in filteredImagesNames"
          :key="item"
          :value="item"
        >
          {{ item }}
        </option>
      </select>
    </td>
    <td class="text-center">
      {{ selectedImageName }}
    </td>
    <td>
      <img
        :src="getImageBlobByKey(originalImageName)"
        :style="{ width: $parent.size + 'px', height: $parent.size + 'px' }"
        @load="getImageDiff"
      >
    </td>
    <td>
      <img
        :src="getImageBlobByKey(selectedImageName)"
        :style="{ width: $parent.size + 'px', height: $parent.size + 'px' }"
        @load="getImageDiff"
      >
    </td>
    <td>
      {{ diff }}
    </td>
  </tr>
</template>

<script>
import Resemble from 'resemblejs'
import Fuzzysort from 'fuzzysort'

export default {
  props: {
    originalImageName: {
      type: String,
      default: '',
    },
    newImageName: {
      type: String,
      default: '',
    },
    isShowDiff: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      filter: '',
      selectedImageName: '',
      diff: '',
    }
  },
  computed: {
    filteredImagesNames() {
      if (this.filter) {
        return Fuzzysort.go(this.filter, this.$parent.imagesNames , { limit: 50 }).map(t => t.target)
      } else {
        return this.$parent.imagesNames
      }
    },
  },
  watch: {
    isShowDiff(bool) {
      if (bool) {
        this.getImageDiff()
      }
    },
  },
  created() {
    this.selectedImageName = this.newImageName
  },
  methods: {
    updateImage(newImageName) {
      this.selectedImageName = newImageName
      this.$emit('update:new-image-name', newImageName)
      this.getImageDiff()
    },
    getImageDiff() {
      if (!this.isShowDiff) {
        return
      }

      const originalImage = this.$parent.imagesMap[this.originalImageName]
      const selectedImage = this.$parent.imagesMap[this.selectedImageName]

      if (originalImage && selectedImage) {
        Resemble(originalImage.file).compareTo(selectedImage.file).onComplete(data => {
          this.diff = data.misMatchPercentage
          this.$emit('update:diff', data.misMatchPercentage)
        })
      } else {
        this.diff = 'N/A'
      }
    },
    getImageBlobByKey(key) {
      return this.$parent.imagesMap[key]?.blob
    },
    autoSelectImage() {
      if (this.filteredImagesNames.length === 1) {
         this.selectedImageName = this.filteredImagesNames[0]
      }
    },
  },
}
</script>

<style lang="scss">
.over-threshold {
  background: rgb(255, 141, 141);
}
</style>