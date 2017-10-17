<template>
  <button :type="originType" class="btn" :class="clz" :disabled="disabled"
    :aria-pressed="active" :aria-disabled="disabled" ref="button"
    @click="onClick" v-clickoutside="()=>{focus=false}">
    <slot></slot>
  </button>
</template>
<script>
import clickoutside from '../../directives/clickoutside'
import commonMixins from '../../mixins/common'
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
    active: Boolean,
    togglable: Boolean
  },
  data () {
    return {
      focus: false
    }
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
      if (this.focus) {
        list.push('focus')
      }
      if (this.active) {
        list.push('active')
      }
      return list
    }
  },
  directives: {
    clickoutside
  },
  methods: {
    onClick () {
      if (this.togglable) {
        this.focus = true
        this.$emit('update:active', !this.active)
      }
      this.$emit('click')
    }
  }
}
</script>
