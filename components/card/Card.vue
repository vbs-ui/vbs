<template>
  <div class="card">
    <img v-if="images&&images.top" :src="images.top.src" :alt="images.top.alt">
    <div v-if="$slots.default" class="card-body">
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: 'bs-card',
  props: {
    imgs: {
      type: [Object, String]
    }
  },
  computed: {
    images () {
      if (!this.imgs || !this.imgs.length) {
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
