<template>
  <li class="nav-item">
    <a href class="nav-link" :class="{active: selected,disabled}" @click.prevent="onClick">
      <slot></slot>
    </a>
  </li>
</template>
<script>
import child from './child'
export default {
  name: 'bs-nav-item',
  mixins: [child],
  props: {
    disabled: Boolean
  },
  methods: {
    onClick () {
      if (!this.disabled) {
        this.$parent.updateActive(this.index)
        this.$emit('click')
      }
    }
  }
}
</script>
