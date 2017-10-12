<template>
  <nav class="navbar navbar-expand-lg" :class="[`navbar-${type}`, bg ? `bg-${type}` : '']">
    <a v-if="$slots.brand" class="navbar-brand" href="#">
      <slot name="brand"></slot>
    </a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul v-if="$slots.default" class="navbar-nav">
        <slot></slot>
      </ul>
      <slot name="extra"></slot>
    </div>
  </nav>
</template>
<script>
import commonMixins from '../../mixins/common'
export default {
  name: 'bs-navbar',
  mixins: [commonMixins],
  props: {
    bg: Boolean
  }
}
</script>
