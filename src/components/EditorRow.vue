<template>
  <tr
    v-show="!this.$parent.diff.threshold.isFilterRows || isShow"
    :class="[ 'item', { 'over-threshold': diff >= threshold }]"
  >
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
    threshold: {
      type: Number,
      default: 10,
    },
  },
  data() {
    return {
      filter: '',
      selectedImageName: '',
      diff: '',
      isShow: true,
      isFirstCompute: true,
    }
  },
  computed: {
    filteredImagesNames() {
      if (this.filter.length > 2) {
        return Fuzzysort.go(this.filter, this.$parent.imagesNames , { limit: 30 }).map(t => t.target)
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
          this.updateDiff(parseFloat(data.misMatchPercentage))
        })
      } else {
        setTimeout(() => { this.updateDiff('N/A') }, 0)
      }
    },
    updateDiff(value) {
      this.diff = value
      this.$emit('update:diff', value)

      if (this.isFirstCompute) {
        this.$emit('onDiffComputed')
        this.isFirstCompute = false
      }
    },
    setIsShow() {
      console.log(this.diff)
      console.log(this.threshold)
      this.isShow =
        (typeof this.diff === 'number' && this.diff >= this.threshold) ||
        this.diff === 'N/A'
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