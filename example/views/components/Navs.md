<script>
export default {
  data () {
    return {
      activeItem1: 'home',
      activeItem2: 1
    }
  }
}
</script>

# Navs
Documentation and examples for how to use Bootstrap's included navigation components.

::: demo Base nav
```html
<bs-nav>
  <bs-nav-item active>Active</bs-nav-item>
  <bs-nav-item>Link</bs-nav-item>
  <bs-nav-item>Link</bs-nav-item>
  <bs-nav-item disabled>Disabled</bs-nav-item>
</bs-nav>
```
:::

::: demo Horizontal alignment
```html
<bs-nav class="justify-content-center">
  <bs-nav-item active>Active</bs-nav-item>
  <bs-nav-item>Link</bs-nav-item>
  <bs-nav-item>Link</bs-nav-item>
  <bs-nav-item disabled>Disabled</bs-nav-item>
</bs-nav>
```
:::

::: demo Right-aligned
```html
<bs-nav class="justify-content-end">
  <bs-nav-item active>Active</bs-nav-item>
  <bs-nav-item>Link</bs-nav-item>
  <bs-nav-item>Link</bs-nav-item>
  <bs-nav-item disabled>Disabled</bs-nav-item>
</bs-nav>
```
:::

::: demo Vertical
```html
<bs-nav class="flex-column">
  <bs-nav-item active>Active</bs-nav-item>
  <bs-nav-item>Link</bs-nav-item>
  <bs-nav-item>Link</bs-nav-item>
  <bs-nav-item disabled>Disabled</bs-nav-item>
</bs-nav>
```
:::

::: demo Tabs
```html
<bs-nav tab>
  <bs-nav-item active>Active</bs-nav-item>
  <bs-nav-item>Link</bs-nav-item>
  <bs-nav-item>Link</bs-nav-item>
  <bs-nav-item disabled>Disabled</bs-nav-item>
</bs-nav>
```
:::

::: demo Pills
```html
<bs-nav pill>
  <bs-nav-item active>Active</bs-nav-item>
  <bs-nav-item>Link</bs-nav-item>
  <bs-nav-item>Link</bs-nav-item>
  <bs-nav-item disabled>Disabled</bs-nav-item>
</bs-nav>
```
:::

::: demo Fill
```html
<bs-nav pill fill>
  <bs-nav-item active>Active</bs-nav-item>
  <bs-nav-item>Longer nav link</bs-nav-item>
  <bs-nav-item>Link</bs-nav-item>
  <bs-nav-item disabled>Disabled</bs-nav-item>
</bs-nav>
```
:::

::: demo Justified
```html
<bs-nav pill justified>
  <bs-nav-item active>Active</bs-nav-item>
  <bs-nav-item>Longer nav link</bs-nav-item>
  <bs-nav-item>Link</bs-nav-item>
  <bs-nav-item disabled>Disabled</bs-nav-item>
</bs-nav>
```
:::

::: demo Working with flex utilities
```html
<bs-nav pill class="flex-column flex-sm-row">
  <bs-nav-item active>Active</bs-nav-item>
  <bs-nav-item>Longer nav link</bs-nav-item>
  <bs-nav-item>Link</bs-nav-item>
  <bs-nav-item disabled>Disabled</bs-nav-item>
</bs-nav>
```
:::

::: demo Wrap with nav
```html
<nav role="navigation">
  <bs-nav pill>
    <bs-nav-item active>Active</bs-nav-item>
    <bs-nav-item>Link</bs-nav-item>
    <bs-nav-item>Link</bs-nav-item>
    <bs-nav-item disabled>Disabled</bs-nav-item>
  </bs-nav>
</nav>
```
:::

::: demo Tabs/Pills with dropdowns
```html
<b>Not supported!</b>
```
:::

::: demo Using `v-model`
```html
<bs-nav pill v-model="activeItem1">
  <bs-nav-item value="home">Active</bs-nav-item>
  <bs-nav-item value="profile">Link</bs-nav-item>
  <bs-nav-item value="link">Link</bs-nav-item>
  <bs-nav-item value="disabled" disabled>Disabled</bs-nav-item>
</bs-nav>
<bs-nav pill v-model="activeItem2">
  <bs-nav-item>Active</bs-nav-item>
  <bs-nav-item>Link</bs-nav-item>
  <bs-nav-item>Link</bs-nav-item>
  <bs-nav-item disabled>Disabled</bs-nav-item>
</bs-nav>
```
:::
