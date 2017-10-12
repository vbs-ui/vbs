<template>
  <div class="tab-pane" :class="[index===$parent.activedIndex?'show active':'']" role="tabpanel" :aria-labelledby="ariaLabel"><slot></slot></div>
</template>
<script>
import child from './child'
export default {
  name: 'bs-nav-pane',
  mixins: [child],
  props: {
    ariaLabel: String
  }
}
</script>
