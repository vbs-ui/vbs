<template>
  <div class="card">
    <component v-if="$slots.header" :is="headerTag" class="card-header" :class="[`${headerClass}`]"><slot name="header"></slot></component>
    <img v-if="images&&images.top" :src="images.top.src" :alt="images.top.alt">
    <div v-if="$slots.default" class="card-body" :class="[`${bodyClass}`]">
      <slot></slot>
    </div>
    <slot name="custom"></slot>
    <div v-if="$slots.footer" class="card-footer" :class="[`${footerClass}`]"><slot name="footer"></slot></div>
  </div>
</template>
<script>
import { isArray, isObject } from 'src/utils'
export default {
  name: 'bs-card',
  props: {
    imgs: {
      type: [Object, String]
    },
    headerTag: {
      type: String,
      default: 'div'
    },
    headerClass: String,
    bodyClass: String,
    footerClass: String
  },
  computed: {
    images () {
      if ((isObject(this.imgs) && !this.imgs) || (isArray(this.imgs) && !this.imgs.length)) {
        return null
      }
      if (typeof this.imgs === 'string') {
        return { top: { src: this.imgs, alt: 'top-image' }}
      }
      return this.imgs
    }
  }
}
</script>
<style lang="scss">
@import "card";
</style>
