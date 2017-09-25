<template>
  <li class="nav-item" :class="{dropdown}">
    <a href class="nav-link" :class="{active: index===$parent.activedIndex,disabled}" @click.prevent="onClick">
      <slot></slot>
    </a>
  </li>
</template>
<script>
export default {
  name: 'bs-nav-item',
  props: {
    disabled: Boolean,
    active: Boolean,
    dropdown: Boolean,
    value: String
  },
  data () {
    return { index: this.value !== undefined ? this.value : -1 }
  },
  methods: {
    setIndex (index) {
      this.index = index
    },
    onClick () {
      if (!this.disabled) {
        this.$parent.updateActive(this.index)
        this.$emit('click')
      }
    }
  },
  created () {
    this.$parent.addNavItem(this)
  },
  destroyed () {
    this.$parent.removeNavItem(this)
  }
}
</script>
