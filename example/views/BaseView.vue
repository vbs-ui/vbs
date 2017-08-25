<template>
  <div id="main">
    <bs-navbar class="bd-navbar" type="dark">
      <template slot="brand">Bootstrap</template>
      <bs-navbar-item active>Home</bs-navbar-item>
      <bs-navbar-item>Link</bs-navbar-item>
      <bs-navbar-item disabled>Disabled</bs-navbar-item>
    </bs-navbar>
    <div class="container-fluid">
      <div class="row flex-xl-nowrap">
        <div class="col-12 col-md-3 col-xl-2 bd-sidebar">
          <sidebar-nav></sidebar-nav>
        </div>
        <main class="col-12 col-md-9 col-xl-8 py-md-3 pl-md-5 bd-content">
          <router-view></router-view>
        </main>
      </div>
    </div>
  </div>
</template>
<script>
import SidebarNav from '@/components/SidebarNav'
export default {
  components: {
    SidebarNav
  }
}
</script>
<style lang="scss">
@import "../assets/variables";
@import "../assets/nav";
</style>
