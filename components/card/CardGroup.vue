<template>
  <div :class="[clz]">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'bs-card-group',
  props: {
    deck: Boolean,
    column: Boolean
  },
  computed: {
    clz () {
      if (this.deck) {
        return 'card-deck'
      } else if (this.column) {
        return 'card-columns'
      }
      return 'card-group'
    }
  }
}
</script>
