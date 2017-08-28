<template>
  <li class="breadcrumb-item" :class="{active}">
    <a v-if="href" :href="href"><slot></slot></a>
    <router-link v-else-if="route" :to="route"><slot></slot></router-link>
    <slot v-else></slot>
  </li>
</template>
<script>
export default {
  name: 'bs-breadcrumb-item',
  props: {
    route: [String, Object],
    href: String,
    active: Boolean
  }
}
</script>
<style lang="scss">
@import "breadcrumb";
</style>
