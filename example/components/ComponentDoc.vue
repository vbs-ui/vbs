<template>
  <div class="component-doc row">
    <div class="col-2">
      <div class="nav flex-column nav-pills" role="tablist">
        <a v-for="(tab,index) in computedTabs" :key="tab" href class="nav-link"  data-toggle="pill" role="tab"
          :class="[activedIndex===index?'active':'']" @click.prevent="activedIndex=index">{{tab}}</a>
      </div>
    </div>
    <div class="col-10">
      <div class="tab-content">
        <div v-for="(tab,index) in computedTabs" :key="tab" ref="pane" class="tab-pane fade"
          :class="[activedIndex===index?'show active':'']" role="tabpanel">
        </div>
      </div>
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
      activedIndex: 0
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
        this.$refs.pane[i].appendChild(this._tables[i])
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
