<template>
  <div class="input-group">
    <span class="input-group-addon"><slot name="left"></slot></span>
    <input class="form-control" :class="inputClass" v-bind="$props">
  </div>
</template>
<script>
import inputMixins from './input'
export default {
  name: 'bs-input-group',
  mixins: [inputMixins],
  props: {

  },
  data () {
    return {

    }
  },
  methods: {

  }
}
</script>
<style lang="scss">
@import "input-group";
</style>
