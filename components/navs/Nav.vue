<template>
  <ul class="nav"
    :class="{'nav-tabs': tab, 'nav-pills': pill, 'nav-fill': fill, 'nav-justified': justified}">
    <slot></slot>
  </ul>
</template>
<script>
import { isString } from 'src/utils'
export default {
  name: 'bs-nav',
  props: {
    tab: Boolean,
    pill: Boolean,
    fill: Boolean,
    justified: Boolean,
    value: [String, Number]
  },
  data () {
    return {
      navs: [],
      activedIndex: this.value !== undefined ? this.value : -1
    }
  },
  watch: {
    value (v) {
      this.activedIndex = v
    }
  },
  methods: {
    addNavItem (item) {
      this.navs.push(item)
      if (!isString(item.index)) {
        item.setIndex(this.navs.length - 1)
      }
    },
    updateActive (index) {
      this.activedIndex = index
      this.$emit('input', index)
    },
    removeNavItem (item) {
      let index = this.navs.indexof(item)
      this.navs.splice(index, 1)
      if (!isString(item)) {
        // update the rest navs' index
        for (; index < this.navs.length; index++) {
          this.navs[index].setIndex(index)
        }
      }
    }
  }
}
</script>
<style lang="scss">
@import "nav";
</style>
