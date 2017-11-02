<template>
  <div>
    <ul class="nav" :class="[clz, {'nav-tabs': tab, 'nav-pills': pill, 'nav-fill': fill, 'nav-justified': justified}]">
      <li v-for="child in children" :key="child.index" class="nav-item">
        <a href class="nav-link" :class="{active: activedIndex===child.index,disabled: child.disabled}" @click.prevent="onClick(child)">
          {{child.$slots.label||child.label}}
        </a>
      </li>
    </ul>
    <div class="tab-content"><slot></slot></div>
  </div>
</template>
<script>
export default {
  name: 'bs-nav',
  props: {
    tab: Boolean,
    pill: Boolean,
    fill: Boolean,
    justified: Boolean,
    value: [String, Number, Object],
    // not support yet
    animate: Boolean,
    // nav custom class
    clz: String
  },
  data () {
    return {
      children: [],
      activedIndex: this.value !== undefined ? this.value : -1
    }
  },
  watch: {
    value (v) {
      this.activedIndex = v
    }
  },
  methods: {
    onClick (child) {
      if (!child.disabled) {
        this.activedIndex = child.index
        this.$emit('input', child.index)
        this.$emit('tab-click', child.index, child)
      }
    },
    addChild (child) {
      this.children.push(child)
      // if child's name is not set, set child's index as the indexof children
      if (!child.name) {
        child.setIndex(this.children.length)
      }
      // set the defaultValue as the first child's index
      if (this.value === undefined && this.children.length === 1) {
        this.activedIndex = child.index
      }
    },
    removeChild (child) {
      const index = this.children.indexOf(child)
      this.children.splice(index, 1)
      // not update the rest children' index
      // for (; index < this.children.length; index++) {
      //   !this.children[index].name && this.children[index].setIndex(index)
      // }
    }
  }
}
</script>
