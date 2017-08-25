<template>
  <nav class="collapse bd-links" id="bd-docs-nav">
    <div v-for="group in navs" class="bd-toc-item" :class="{active: true}">
      <router-link :to="group.children[0].link" class="bd-toc-link">{{group.group}}</router-link>
      <ul class="nav bd-sidenav">
        <router-link v-for="li in group.children" :key="li.link" tag="li" :to="li.link" active-class="active bd-sidenav-active">
          <a>{{li.name}}</a>
        </router-link>
      </ul>
    </div>
  </nav>
</template>
<script>
import navList from '@/nav'
export default {
  data () {
    return {
      navs: navList
    }
  }
}
</script>
<style lang="scss">
@import "../assets/variables";
@import "../assets/sidebar";
@import "nav";
</style>
