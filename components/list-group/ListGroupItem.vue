<script>
import commonMixins from 'src/mixins/common'
export default {
  name: 'bs-list-group-item',
  mixins: [commonMixins],
  props: {
    active: Boolean,
    tag: {
      type: String,
      default: 'div'
    },
    type: {
      type: String,
      default: ''
    }
  },
  methods: {
    onClick (e) {
      this.$emit('click')
      e.preventDefault()
    }
  },
  render (h) {
    const attrs = {}
    if (this.tag === 'a') {
      attrs.href = '#'
    }
    return h(this.tag, {
      staticClass: 'list-group-item',
      'class': [
        { 'list-group-item-action': ['a', 'button'].indexOf(this.tag) > -1 },
        { active: this.active },
        { disabled: this.disabled },
        this.type ? `list-group-item-${this.type}` : ''
      ],
      attrs,
      on: {
        click: this.onClick
      }
    }, this.$slots.default)
  }
}
</script>
