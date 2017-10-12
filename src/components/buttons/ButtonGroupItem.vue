<template>
  <label class="btn" :class="[`btn-${$parent.type}`, active?'active':'', focus?'focus':'']"
    @click="focus=true" v-clickoutside="()=>{focus=false}">
    <template v-if="$parent.multiply">
      <input type="checkbox" :value="value" autocomplete="off" @change="onChange1"> <slot></slot>
    </template>
    <template v-else>
      <input type="radio" :value="value" :name="name" autocomplete="off" @change="onChange2"> <slot></slot>
    </template>
  </label>
</template>
<script>
import clickoutside from '../../directives/clickoutside'
export default {
  name: 'bs-button-item',
  model: {
    prop: 'checked',
    event: 'change'
  },
  props: {
    value: {
      required: true
    },
    checked: {
      required: true
    },
    disabled: Boolean,
    // recomment to provide
    name: {
      type: String,
      default: 'options'
    }
  },
  data () {
    return {
      focus: false
    }
  },
  computed: {
    active () {
      if (this.$parent.multiply) {
        return this.checked.some(item => item === this.value)
      } else {
        return this.checked === this.value
      }
    }
  },
  directives: {
    clickoutside
  },
  methods: {
    onChange1 () {
      const copy = this.checked.slice()
      if (this.active) {
        copy.splice(this.checked.indexOf(this.value), 1)
      } else {
        copy.push(this.value)
      }
      this.$emit('change', copy)
    },
    onChange2 () {
      this.$emit('change', this.value)
    }
  }
}
</script>
