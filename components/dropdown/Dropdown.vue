<script>
import Popper from 'popper.js/dist/esm/popper.js'
import commonMixins from 'src/mixins/common'
import clickoutside from 'directives/clickoutside'
import { AttachmentMap } from 'src/constants'
export default {
  name: 'bs-dropdown',
  mixins: [commonMixins],
  props: {
    label: {
      type: String,
      required: true
    },
    split: Boolean,
    size: String,
    up: Boolean,
    align: {
      type: String,
      default: 'left'
    }
  },
  data () {
    return {
      expanded: false
    }
  },
  watch: {
    expanded (v) {
      if (v) {
        new Popper(this.$refs.trigger, this.$refs.menu, {
          placement: this.getPlacement()
        })
      }
    }
  },
  directives: {
    clickoutside
  },
  methods: {
    getPlacement () {
      let placement = AttachmentMap.BOTTOM
      if (this.up) {
        placement = AttachmentMap.TOP
        if (this.align === 'right') {
          placement = AttachmentMap.TOPEND
        }
      } else if (this.align === 'right') {
        placement = AttachmentMap.BOTTOMEND
      }
      return placement
    }
  },
  render (h) {
    const trigger = h('button', {
      staticClass: this.split ? 'btn dropdown-toggle dropdown-toggle-split' : 'btn dropdown-toggle',
      'class': [`btn-${this.type}`, this.size ? `btn-${this.size}` : '', { dropup: this.up }],
      attrs: {
        type: 'button',
        'aria-haspopup': true,
        'aria-expanded': `${this.expanded}`
      },
      on: {
        click: () => {
          this.expanded = !this.expanded
        }
      },
      directives: [
        {
          name: 'clickoutside',
          value: (e) => {
            // FIXME: always false
            if (!e.target.contains(this.$refs.menu)) {
              this.expanded = false
            }
          }
        }
      ],
      ref: 'trigger'
    }, [this.split ? null : this.label])
    const subComp = [h('div', {
      staticClass: 'dropdown-menu',
      'class': { show: this.expanded },
      attrs: {
        'aria-labelledby': 'dropdownMenuButton'
      },
      ref: 'menu'
    }, [this.$slots.default])]
    subComp.unshift(trigger)
    if (this.split) {
      subComp.unshift(h('button', {
        attrs: { type: 'button' },
        staticClass: 'btn',
        'class': [`btn-${this.type}`, this.size ? `btn-${this.size}` : '']
      }, [this.label]))
    }
    return h('div', {
      'class': [this.up ? 'dropup' : 'dropdown', { 'btn-group': this.split }]
    }, subComp)
  }
}
</script>
<style lang="scss">
@import "dropdown";
@import "buttons";
@import "button-group";
</style>
