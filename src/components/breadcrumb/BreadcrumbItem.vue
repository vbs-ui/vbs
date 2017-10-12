<script>
export default {
  name: 'bs-breadcrumb-item',
  props: {
    route: [String, Object],
    href: String,
    active: Boolean
  },
  render (h) {
    const attrs = {}
    if (this.active) {
      attrs['aria-current'] = 'page'
    }
    const subComp = []
    if (!this.route && !this.href) {
      subComp.push(this.$slots.default)
    } else if (this.route) {
      subComp.push(h('router-link', { props: { to: this.route }}, [this.$slots.default]))
    } else {
      subComp.push(h('a', { attrs: { href: this.href }}, [this.$slots.default]))
    }
    return h('li', {
      staticClass: 'breadcrumb-item',
      'class': {
        active: this.active
      },
      attrs
    }, subComp)
  }
}
</script>
