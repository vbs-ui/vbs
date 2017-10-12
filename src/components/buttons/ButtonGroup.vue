<template>
  <div class="btn-group" role="group" data-toggle="buttons" :aria-label="ariaLabel">
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
