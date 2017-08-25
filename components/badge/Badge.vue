<template>
  <span class="badge" :class="[`badge-${type}`, pill ? 'badge-pill' : '']"><slot></slot></span>
</template>
<script>
import commonMixins from '../mixins/common'
export default {
  name: 'bs-badge',
  mixins: [commonMixins],
  props: {
    pill: Boolean
  }
}
</script>
<style lang="scss">
@import "badge";
</style>
