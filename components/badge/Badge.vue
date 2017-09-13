<script>
import commonMixins from 'src/mixins/common'
export default {
  name: 'bs-badge',
  mixins: [commonMixins],
  props: {
    pill: Boolean,
    actionable: Boolean
  },
  render (h) {
    const attrs = {}
    if (this.actionable) {
      attrs.href = '#'
    }
    return h(this.actionable ? 'a' : 'span', {
      staticClass: 'badge',
      'class': [
        `badge-${this.type}`,
        { 'badge-pill': this.pill }
      ],
      attrs,
      on: {
        click: (e) => {
          this.$emit('click')
          e.preventDefault()
        }
      }
    }, [this.$slots.default])
  }
}
</script>
<style lang="scss">
@import "badge";
</style>
