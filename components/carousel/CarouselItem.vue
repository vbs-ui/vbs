<template>
  <div class="carousel-item" :class="{active}">
    <slot></slot>
    <div class="carousel-caption">
      <slot name="caption"></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: 'bs-carousel-item',
  data () {
    return { active: false }
  },
  methods: {
    setActive (active) {
      this.active = active
    }
  },
  created () {
    this.$parent.addItem(this)
  },
  destroyed () {
    this.$parent.removeItem(this)
  }
}
</script>
