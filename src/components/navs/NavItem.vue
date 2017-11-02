<template>
  <div class="tab-pane" :class="[index===$parent.activedIndex?'show active':'']"
    role="tabpanel" :aria-labelledby="ariaLabel">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'bs-nav-item',
  props: {
    disabled: Boolean,
    dropdown: Boolean,
    label: String,
    name: [String, Number, Object],
    ariaLabel: String
  },
  data () {
    return { index: this.name !== undefined ? this.name : -1 }
  },
  methods: {
    setIndex (index) {
      this.index = index
    }
  },
  created () {
    this.$parent.addChild(this)
  },
  destroyed () {
    this.$parent.removeChild(this)
  }
}
</script>
