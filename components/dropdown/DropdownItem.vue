<script>
export default {
  name: 'bs-dropdown-item',
  props: {
    disabled: Boolean,
    tag: {
      type: String,
      default: 'a'
    }
  },
  render (h) {
    const attrs = {}
    if (this.tag === 'a') {
      attrs.href = '#'
    }
    return h(this.tag, {
      staticClass: 'dropdown-item',
      'class': { disabled: this.disabled },
      attrs,
      on: {
        click: (e) => {
          if (!this.disabled) {
            if (this.$parent && this.$parent.expanded !== undefined) {
              this.$parent.expaned = false
            }
            this.$emit('click')
          }
          e.preventDefault()
        }
      }
    }, [this.$slots.default])
  }
}
</script>
