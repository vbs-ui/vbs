<template>
  <button :type="originType" class="btn" :class="clz" :disabled="disabled"
    :aria-pressed="active" :aria-disabled="disabled" ref="button"
    @click="$emit('click', this)">
    <slot></slot>
  </button>
</template>
<script>
import commonMixins from '../mixins/common'
export default {
  name: 'bs-button',
  mixins: [commonMixins],
  props: {
    originType: {
      type: String,
      default: 'button'
    },
    outline: Boolean,
    size: String,
    block: Boolean,
    active: Boolean
  },
  computed: {
    clz () {
      const list = [`btn${this.outline ? '-outline' : ''}-${this.type}`]
      if (this.size) {
        list.push(`btn-${this.size}`)
      }
      if (this.block) {
        list.push(`btn-block`)
      }
      if (this.active) {
        list.push('active')
      }
      return list
    }
  }
}
</script>
<style lang="scss">
@import "buttons";
</style>
