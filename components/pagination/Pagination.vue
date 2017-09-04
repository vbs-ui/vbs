<template>
  <nav :aria-label="desc">
    <ul class="pagination" :class="[size?`pagination-${size}`:'',`justify-content-${align}`]">
      <!-- first page link -->
      <li v-if="showFirst" class="page-item" :class="{disabled:prevDisabled}">
        <a class="page-link" href="#" aria-label="First"
          :tabindex="prevDisabled?-1:0" @click.prevent="to(1)">
          <slot name="first"></slot>
          <template v-if="!$slots.first">{{firstText}}</template>
        </a>
      </li>
      <!-- prev page link -->
      <li v-if="showPrev" class="page-item" :class="{disabled:prevDisabled}">
        <a class="page-link" href="#" aria-label="Previous"
          :tabindex="prevDisabled?-1:0" @click.prevent="prev()">
          <slot name="prev"></slot>
          <template v-if="!$slots.prev">{{prevText}}</template>
        </a>
      </li>
      <!-- pages -->
      <li v-for="page in pageQueue" class="page-item" :class="{active:value===page}">
        <span v-if="page === '...'" class="page-link">...</span>
        <a v-else class="page-link" href="#" @click.prevent="to(page)">{{page}}</a>
      </li>
      <!-- next page link -->
      <li v-if="showNext" class="page-item" :class="{disabled:nextDisabled}">
        <a class="page-link" href="#" aria-label="Next"
        :tabindex="nextDisabled?-1:0" @click.prevent="next()">
          <slot name="next"></slot>
          <template v-if="!$slots.next">{{nextText}}</template>
        </a>
      </li>
      <!-- last page link -->
      <li v-if="showLast" class="page-item" :class="{disabled:nextDisabled}">
        <a class="page-link" href="#" aria-label="Last"
        :tabindex="nextDisabled?-1:0" @click.prevent="to(pages)">
          <slot name="last"></slot>
          <template v-if="!$slots.last">{{lastText}}</template>
        </a>
      </li>
    </ul>
  </nav>
</template>
<script>
import { rangeArray } from 'src/utils'
export default {
  name: 'bs-pagination',
  props: {
    value: Number,
    pages: {
      type: Number,
      default: 0
    },
    size: String,
    showPrev: {
      type: Boolean,
      default: true
    },
    showNext: {
      type: Boolean,
      default: true
    },
    showFirst: Boolean,
    showLast: Boolean,
    prevText: {
      type: String,
      default: 'Previous'
    },
    nextText: {
      type: String,
      default: 'Next'
    },
    firstText: {
      type: String,
      default: 'Home'
    },
    lastText: {
      type: String,
      default: 'End'
    },
    desc: String,
    align: {
      type: String,
      default: 'start'
    },
    // pages limit, ensure this is odd value
    limit: {
      type: Number,
      default: -1
    },
    // heading and tail page limit
    headingLimit: {
      type: Number,
      default: 2
    }
  },
  computed: {
    prevDisabled () {
      return this.value <= 1
    },
    nextDisabled () {
      return this.value >= this.pages
    },
    pageQueue () {
      if (this.value !== undefined && this.limit !== -1 && this.limit >= this.headingLimit * 2 + 3) {
        const offset = (this.limit - this.headingLimit * 2 - 1) / 2
        const endIndex = this.pages - this.headingLimit + 1
        const prevIndex = Math.max(this.headingLimit + 1, this.value - Math.floor(offset))
        const nextIndex = Math.min(endIndex - 1, this.value + Math.ceil(offset))
        const array = [
          ...rangeArray(1, this.headingLimit),
          ...rangeArray(prevIndex, nextIndex),
          ...rangeArray(endIndex, this.pages)
        ]
        if (prevIndex > this.headingLimit + 1) {
          array.splice(this.headingLimit, 0, '...')
        }
        if (nextIndex < endIndex - 1) {
          array.splice(array.length - this.headingLimit, 0, '...')
        }
        return array
      }
      return [...rangeArray(1, this.pages)]
    }
  },
  methods: {
    prev () {
      if (!this.prevDisabled) {
        this.to(this.value - 1)
      }
    },
    to (page) {
      this.$emit('input', page)
    },
    next () {
      if (!this.nextDisabled) {
        this.to(this.value + 1)
      }
    }
  }
}
</script>
<style lang="scss">
@import "pagination";
</style>
