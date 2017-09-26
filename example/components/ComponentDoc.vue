<template>
  <div class="component-doc">
    <bs-nav tab v-model="activedIndex">
      <bs-nav-item v-for="tab in computedTabs" :key="tab">{{tab}}</bs-nav-item>
    </bs-nav>
    <bs-nav-content v-model="activedIndex">
      <bs-nav-pane v-for="tab in computedTabs" :key="tab" ref="pane"></bs-nav-pane>
    </bs-nav-content>
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'component-doc',
  props: {
    tabs: String
  },
  data () {
    return {
      _tables: [],
      activedIndex: 0
    }
  },
  computed: {
    computedTabs () {
      if (this.tabs) {
        return this.tabs.split(/(,| )/)
      }
      return []
    }
  },
  mounted () {
    this.$nextTick(() => {
      this._tables = this.$el.querySelectorAll('table')
      for (let i = 0; i < this.computedTabs.length; i++) {
        this.$refs.pane[i].$el.appendChild(this._tables[i])
      }
    })
  }
}
</script>
