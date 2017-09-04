<template>
  <div class="progress">
    <div v-for="progress in values" class="progress-bar"
      :class="[progress.type?`bg-${progress.type}`:'', striped?'progress-bar-striped':'', animated?'progress-bar-animated':'']"
      role="progressbar" :aria-valuenow="`${progress.value}`" :aria-valuemin="0"
      aria-valuemax="100" :style="{width:`${progress.value}%`}"><slot></slot></div>
  </div>
</template>
<script>
import commonMixins from 'src/mixins/common'
import { isArray, isObject } from 'src/utils'
export default {
  name: 'bs-progress',
  mixins: [commonMixins],
  props: {
    value: {
      type: [Number, String, Array],
      default: 0
    },
    striped: Boolean,
    animated: Boolean
  },
  computed: {
    values () {
      if (isArray(this.value)) {
        return this.value.map(v => {
          if (isObject(v)) {
            return { value: +v.value || 0, type: v.type }
          } else {
            return { value: +v || 0 }
          }
        })
      } else {
        return [{ value: +this.value, type: this.type }]
      }
    }
  }
}
</script>
<style lang="scss">
@import "progress";
</style>
