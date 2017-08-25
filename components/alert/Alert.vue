<template>
  <div v-if="!closed" class="alert" role="alert" :class="clz">
    <button v-if="closable" @click="closed=true" type="button" class="close" data-dismiss="alert" aria-label="Close">
      <span aria-hidden="true">&times;</span>
    </button>
    <slot></slot>
  </div>
</template>
<script>
import commonMixins from '../mixins/common'
export default {
  name: 'bs-alert',
  mixins: [commonMixins],
  props: {
    closable: Boolean,
    animate: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
      closed: false
    }
  },
  computed: {
    clz () {
      const list = [`alert-${this.type}`]
      if (this.closable) {
        list.push('alert-dismissible')
        if (this.animate) {
          list.push('fade show')
        }
      }
      return list
    }
  }
}
</script>
<style lang="scss">
@import "alert";
</style>
