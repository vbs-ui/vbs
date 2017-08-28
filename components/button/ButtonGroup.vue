<template>
  <div class="btn-group" data-toggle="buttons">
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
    }
  }
}
</script>
<style lang="scss">
@import "button-group";
</style>
