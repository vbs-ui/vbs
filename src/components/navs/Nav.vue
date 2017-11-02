<template>
  <ul class="nav"
    :class="{'nav-tabs': tab, 'nav-pills': pill, 'nav-fill': fill, 'nav-justified': justified}">
    <slot></slot>
  </ul>
</template>
<script>
import parent from './parent'
export default {
  name: 'bs-nav',
  mixins: [parent],
  props: {
    tab: Boolean,
    pill: Boolean,
    fill: Boolean,
    justified: Boolean
  },
  methods: {
    updateActive (index) {
      this.activedIndex = index
      this.$emit('input', index)
    }
  }
}
</script>
