<template>
  <div class="carousel slide">
    <ol v-if="showIndicators" class="carousel-indicators">
      <li v-for="(_, index) in children.length" :class="{active:active===index}" @click="active=index"></li>
    </ol>
    <div class="carousel-inner">
      <slot></slot>
    </div>
    <template v-if="showControl">
      <a class="carousel-control-prev" :class="{disabled:active<=0}" role="button" @click="toPrev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      </a>
      <a class="carousel-control-next" :class="{disabled:active>=children.length}" role="button" @click="toNext">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
      </a>
    </template>
  </div>
</template>
<script>
export default {
  name: 'bs-carousel',
  props: {
    showIndicators: {
      type: Boolean,
      default: true
    },
    showControl: Boolean,
    defaultActive: {
      type: Number,
      default: 0
    },
    interval: {
      type: Number,
      default: 5000
    },
    keyboard: {
      type: Boolean,
      default: true
    },
    pause: {
      type: [String, Boolean],
      default: 'hover'
    }
  },
  data () {
    return {
      active: this.defaultActive,
      children: [],
      timeout: null
    }
  },
  watch: {
    active (v) {
      this.$emit('change', v)
    }
  },
  methods: {
    addItem (item) {
      this.children.push(item)
      item.init(this.children.length === this.defaultActive + 1)
    },
    removeItem (item) {
      this.children.splice(this.children.indexOf(item), 1)
    },
    updateActive (direction) {
      this.children.forEach((child, index) => {
        child.setActive(index === this.active, direction)
      })
    },
    toPrev () {
      if (this.active > 0) {
        this.stopInterval()
        this.active--
        this.updateActive('prev')
        this.startInterval()
      }
    },
    toNext () {
      if (this.active > this.children.length - 2) {
        this.stopInterval()
        this.active++
        this.updateActive('next')
        this.startInterval()
      }
    },
    startInterval () {
      this.timeout = setInterval(() => {
        this.active = (this.active + 1) % this.children.length
        this.updateActive('next')
      }, this.interval)
    },
    stopInterval () {
      if (this.timeout) {
        clearInterval(this.timeout)
        this.timeout = null
      }
    }
  },
  mounted () {
    // this.updateActive()
    this.startInterval()
  }
}
</script>
<style lang="scss">
@import "carousel";
</style>
