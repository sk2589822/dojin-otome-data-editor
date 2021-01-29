<template>
  <tr :class="[ 'item', { 'over-threshold': diff >= $parent.diffThreshold }]">
    <td>
      <span>{{ originalImageName }}</span>
    </td>
    <td class="text-center">
      <input
        v-model="filter"
        type="text"
        @input="updateImage(filteredImagesNames[0])"
      >
      <select
        :value="selectedImageName"
        class="d-block mx-auto mt-2"
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
      let result = []
      if (this.filter) {
        result = Fuzzysort.go(this.filter, this.$parent.imagesNames).map(item => item.target)
      }

      return result.length ? result : this.$parent.imagesNames
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
  },
}
</script>

<style lang="scss">
.width-10 {
  width: 10%;
}

.width-15 {
  width: 15%;
}

.width-20 {
  width: 20%;
}

.over-threshold {
  background: rgb(255, 141, 141);
}
</style>