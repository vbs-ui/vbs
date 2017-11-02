export default {
  props: {
    name: [String, Number, Object]
  },
  data () {
    return { index: this.name !== undefined ? this.name : -1 }
  },
  computed: {
    selected () {
      return this.index === this.$parent.activedIndex
    }
  },
  methods: {
    setIndex (index) {
      this.index = index
    }
  },
  created () {
    this.$parent.addChild(this)
  },
  destroyed () {
    this.$parent.removeChild(this)
  }
}
