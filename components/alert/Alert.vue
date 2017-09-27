<script>
import commonMixins from 'src/mixins/common'
export default {
  name: 'bs-alert',
  mixins: [commonMixins],
  props: {
    closable: Boolean,
    animate: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
      closed: false
    }
  },
  methods: {
    // render alert body
    generateRender (h) {
      // if closed, then render nothing
      if (this.closed) {
        return null
      }
      const subComp = [this.$slots.default]
      if (this.closable) {
        subComp.unshift(h('button', {
          attrs: {
            type: 'button',
            'aria-label': 'Close'
          },
          'class': 'close',
          on: {
            click: () => {
              this.closed = true
              this.$emit('close')
            }
          }
        }, [
          h('span', {
            attrs: {
              'aria-hidden': 'true'
            }
          }, ['\xD7'])]
        ))
      }
      return h('div', {
        staticClass: 'alert',
        'class': [`alert-${this.type}`, { 'alert-dismissible': this.closable }],
        attrs: {
          role: 'alert'
        }
      }, subComp)
    }
  },
  render (h) {
    if (this.animate) {
      // wrap with transition component
      return h('transition', {
        props: {
          leaveClass: 'show fade',
          leaveToClass: 'fade'
        }
      }, [this.generateRender(h)])
    } else {
      return this.generateRender(h)
    }
  }
}
</script>
