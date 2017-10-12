<template>
  <li class="nav-item" :class="{active,dropdown}">
    <a class="nav-link" :class="{disabled}" href="#">
      <slot></slot>
    </a>
  </li>
</template>
<script>
export default {
  name: 'bs-navbar-item',
  props: {
    active: Boolean,
    disabled: Boolean,
    dropdown: Boolean
  }
}
</script>
