<template>
  <div class="tab-content"><slot></slot></div>
</template>
<script>
import parent from './parent'
export default {
  name: 'bs-nav-content',
  mixins: [parent],
  props: {
    // not support yet.
    animate: Boolean
  }
}
</script>
