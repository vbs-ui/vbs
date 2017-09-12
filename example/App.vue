<template>
  <transition name="router">
    <router-view></router-view>
  </transition>
  <!-- <u-toast :value="toast.show" :message="toast.message"></u-toast>
  <u-confirm :value="confirm.show" :title="confirm.title" :content="confirm.content"
    @cancel="onConfirmCancel" @ok="onConfirmOk"></u-confirm> -->
</template>
<script>
import Vue from 'vue'
import { mapGetters, mapActions } from 'vuex'
export default {
  data () {
    return {
      confirmPromiseResolve: null,
      confirmPromiseReject: null,
      toastQueue: []
    }
  },
  computed: {
    ...mapGetters(['toast', 'confirm'])
  },
  methods: {
    ...mapActions(['updateToast', 'updateConfirm']),
    onConfirmCancel () {
      if (this.confirmPromiseReject) {
        this.confirmPromiseReject()
        this.updateConfirm({ show: false })
      }
    },
    onConfirmOk () {
      if (this.confirmPromiseResolve) {
        this.confirmPromiseResolve()
        this.updateConfirm({ show: false })
      }
    }
  },
  created () {
    const self = this
    // TODO:优化，暂时不支持多toast一起调用 toast方法
    Vue.prototype.$toast = function (message, duration = 1500) {
      self.updateToast({ show: true, message })
      setTimeout(() => {
        self.updateToast({ show: false })
      }, duration)
    }
    // confirm 方法
    Vue.prototype.$confirm = function (title, content) {
      self.updateConfirm({ show: true, title, content })
      return new Promise((resolve, reject) => {
        self.confirmPromiseResolve = resolve
        self.confirmPromiseReject = reject
      })
    }
  }
}
</script>
<style lang="scss">
@import "print";
@import "reboot";
@import "utilities";
@import "grid";
@import "type";
@import "close";
@import "transitions";
@import "jumbotron";
@import "assets/atom-one-light.css";
body {
  margin: 0;
  padding: 0;
}
pre {
  margin-bottom: 0;
  code {
    font-family: SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace;
  }
}
</style>
