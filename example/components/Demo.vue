<template>
  <div class="demo-block" :class="{opened: show}">
    <div class="preview"><slot></slot></div>
    <div class="description">
      <slot name="desp"></slot>
      <svg class="icon-toggle-code" @click="show=!show" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
        <path fill="#a8a8a8" d="M236.2 311.5 236.2 311.5c-12.5-12.5-32.8-12.5-45.3 0L9.4 493c-12.5 12.5-12.5 32.7 0 45.2l181.6 182c12.5 12.5 32.8 12.5 45.3 0l0 0c12.5-12.5 12.5-32.8 0-45.3L77.1 515.9l159.2-159.2C248.7 344.2 248.7 323.9 236.2 311.5z"></path>
        <path fill="#a8a8a8" d="M787.8 311.5 787.8 311.5c12.5-12.5 32.8-12.5 45.3 0L1014.6 493c12.5 12.5 12.5 32.7 0 45.2L833 720.3c-12.5 12.5-32.8 12.5-45.3 0l0 0c-12.5-12.5-12.5-32.8 0-45.3l159.2-159.2L787.8 356.7C775.3 344.2 775.3 323.9 787.8 311.5z"></path>
        <path fill="#a8a8a8" d="M691.2 132.1 691.2 132.1c15.6 8.2 21.6 27.6 13.4 43.2L333.5 879.2c-8.2 15.6-27.6 21.6-43.2 13.4l0 0c-15.6-8.2-21.6-27.6-13.4-43.2l371.1-703.9C656.2 129.9 675.5 123.9 691.2 132.1z"></path>
      </svg>
    </div>
    <div v-show="show" class="source">
      <span class="btn-clipboard" data-original-title="Copy to clipboard" ref="copy">Copy</span>
      <slot name="source"></slot>
    </div>
  </div>
</template>
<script>
import Clipboard from 'clipboard'
export default {
  name: 'demo',
  data () {
    return {
      show: false,
      clipboardInstance: null
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.clipboardInstance = new Clipboard(this.$refs.copy, {
        text: target => {
          return target.nextElementSibling.innerText
        }
      })
    })
  },
  beforeDestroy () {
    if (this.clipboardInstance) {
      this.clipboardInstance.destroy()
    }
  }
}
</script>
<style lang="scss">
.demo-block {
  margin-bottom: 15px;
  border: 1px solid #e9e9e9;
  border-radius: 4px;
  code {
    font-size: 14px;
  }
  .preview {
    padding: 30px 15px;
    border-bottom: 1px solid #e9e9e9;
  }
  .description {
    position: relative;
    padding: 18px 30px 18px 15px;
    p {
      margin-bottom: 0;
    }
    .icon-toggle-code {
      position: absolute;
      right: 12px;
      bottom: 18px;
      width: 16px;
      cursor: pointer;
      &:hover path {
        fill: #666;
      }
    }
  }
  .source {
    position: relative;
    padding: 15px;
    background-color: #f7f7f9;
    .btn-clipboard {
      position: absolute;
      top: .5rem;
      right: .5rem;
      z-index: 10;
      display: block;
      padding: .25rem .5rem;
      font-size: 75%;
      color: #818a91;
      cursor: pointer;
      background-color: transparent;
      border: 0;
      border-radius: .25rem;
      &:hover {
        color: #fff;
        background-color: #027de7;
      }
    }
  }
  &.opened {
    .description {
      border-bottom: 1px solid #e9e9e9;
    }
  }

  /** example components styles */
  .progress {
    & + .progress,
    & + .btn {
      margin-top: 1rem;
    }
  }
}
</style>
