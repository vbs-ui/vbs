<template>
  <div class="component-doc row">
    <div class="col-2">
      <bs-nav v-model="activedIndex" pill class="flex-column">
        <bs-nav-item v-for="(tab,index) in computedTabs" :key="tab">{{tab}}</bs-nav-item>
      </bs-nav>
    </div>
    <div class="col-10">
      <bs-nav-content :value="activedIndex">
        <bs-nav-pane v-for="(tab,index) in computedTabs" :key="tab" ref="pane"></bs-nav-pane>
      </bs-nav-content>
    </div>
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
      activedIndex: 1
    }
  },
  computed: {
    computedTabs () {
      if (this.tabs) {
        return this.tabs.split(/,| /)
      }
      return []
    }
  },
  mounted () {
    this.$nextTick(() => {
      this._tables = this.$el.querySelectorAll('table')
      this._tables.forEach(_table => {
        _table.classList.add('table')
        _table.classList.add('table-bordered')
      })
      for (let i = 0; i < this.computedTabs.length; i++) {
        this.$refs.pane[i].$el.appendChild(this._tables[i])
      }
    })
  }
}
</script>
<style lang="scss">
.component-doc {
  .nav-tabs {
    margin-bottom: 12px;
  }
}
</style>
