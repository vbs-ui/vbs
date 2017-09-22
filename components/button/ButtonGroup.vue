<template>
  <div class="btn-group" role="group" :aria-label="ariaLabel">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'bs-button-group',
  props: {
    multiply: Boolean,
    type: {
      type: String,
      default: 'primary'
    },
    ariaLabel: String
  }
}
</script>
<style lang="scss">
@import "button-group";
</style>
