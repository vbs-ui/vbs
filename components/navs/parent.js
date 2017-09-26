import { isNumber } from 'src/utils'
export default {
  props: {
    value: [String, Number]
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
    addChild (child) {
      this.children.push(child)
      if (isNumber(child.index)) {
        child.setIndex(this.children.length - 1)
      }
      if (this.value === undefined && child.active) {
        this.activedIndex = child.index
      }
    },
    removeChild (child) {
      let index = this.children.indexof(child)
      this.children.splice(index, 1)
      if (isNumber(child)) {
        // update the rest children' index
        for (; index < this.children.length; index++) {
          this.children[index].setIndex(index)
        }
      }
    }
  }
}
