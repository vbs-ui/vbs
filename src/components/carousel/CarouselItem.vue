<template>
  <transition
    :enter-active-class="`carousel-item-${order}`"
    :enter-to-class="`carousel-item-${direction}`"
    :leave-to-class="`active carousel-item-${direction}`"
    @after-enter="clz = ['active']"
    @after-leave="clz = ['']">
    <div v-show="active" class="carousel-item" :class="clz">
      <slot></slot>
      <div class="carousel-caption">
        <slot name="caption"></slot>
      </div>
    </div>
  </transition>
</template>
<script>
export default {
  name: 'bs-carousel-item',
  data () {
    return {
      active: false,
      // -1 left 0 null 1 right
      direction: '',
      order: '',
      clz: []
    }
  },
  methods: {
    init (active) {
      this.active = active
      if (active) {
        this.clz = ['active']
      }
    },
    setActive (active, direction) {
      this.active = active
      this.order = direction
      this.direction = direction === 'next' ? 'left' : 'right'
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
