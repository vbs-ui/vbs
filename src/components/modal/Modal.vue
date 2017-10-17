<template>
  <transition
    @before-enter="beforeEnter"
    @enter="enter"
    @after-enter="afterEnter"
    @before-leave="beforeLeave"
    @after-leave="afterLeave">
    <div v-show="value" class="modal fade modal-show" :class="{show}">
      <div class="modal-dialog" :class="[size?`modal-${size}`:'']" tabindex="-1"
        :role="role" :aria-labelledby="ariaLabel" :aria-hidden="`${value}`"
        v-clickoutside="()=>{onBackdrop()}">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">
              <slot name="title">{{title}}</slot>
            </h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close" @click="close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <slot></slot>
          </div>
          <div v-if="$slots.footer" class="modal-footer">
            <slot name="footer"></slot>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>
<script>
import clickoutside from '../../directives/clickoutside'
const ClassName = {
  OPEN: 'modal-open',
  SHOW: 'show'
}
const ESCAPE_KEYCODE = 27
let _backdrop
export default {
  name: 'bs-modal',
  props: {
    size: String,
    value: Boolean,
    title: String,
    role: {
      type: String,
      default: 'dialog'
    },
    ariaLabel: String,
    backdrop: {
      type: Boolean,
      default: true
    },
    keyboard: {
      type: Boolean,
      default: true
    },
    focus: {
      type: Boolean,
      default: true
    },
    trigger: Object
  },
  data () {
    return {
      show: false
    }
  },
  directives: { clickoutside },
  methods: {
    close () {
      this.$emit('input', false)
      this.$emit('close')
    },
    onBackdrop () {
      if (this.backdrop) {
        this.$emit('backdrop')
        this.close()
      }
    },
    onKeyboard (evt) {
      if (evt.keyCode === ESCAPE_KEYCODE) {
        this.$emit('escape')
        this.close()
      }
    },
    _showBackdrop () {
      document.body.appendChild(_backdrop)
      this.$nextTick(() => {
        _backdrop.classList.add(ClassName.SHOW)
      })
    },
    _hideBackdrop () {
      if (_backdrop) {
        _backdrop.classList.remove(ClassName.SHOW)
        document.body.removeChild(_backdrop)
      }
    },
    beforeEnter () {
      // add body class
      document.body.classList.add(ClassName.OPEN)
      this._showBackdrop()
      this.$emit('before-show')
    },
    enter () {
      this.show = true
      // reflow
      this.$el.offsetHeight
    },
    afterEnter () {
      // FIXME:focus
      if (this.focus) {
        this.$el.focus()
      }
      this.$emit('shown')
    },
    beforeLeave () {
      this.show = false
      this.$emit('before-hide')
    },
    afterLeave () {
      this._hideBackdrop()
      document.body.classList.remove(ClassName.OPEN)
      // focus trigger
      if (this.trigger) {
        let trigger = this.trigger
        if (!this.trigger.nodeType) {
          trigger = trigger.$el
        }
        trigger.focus && trigger.focus()
      }
      this.$emit('hidden')
    }
  },
  mounted () {
    this.$nextTick(() => {
      if (this.keyboard) {
        window.addEventListener('keydown', this.onKeyboard)
      }
      if (!_backdrop) {
        _backdrop = document.createElement('div')
        _backdrop.className = 'modal-backdrop fade'
      }
    })
  },
  beforeDestroy () {
    window.removeEventListener('keydown', this.onKeyboard)
  }
}
</script>
<style>
.modal.modal-show {
  display: initial;
}
</style>
