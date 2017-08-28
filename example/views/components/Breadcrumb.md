# Breadcrumb
Indicate the current page's location within a navigational hierarchy that automatically adds separators via CSS.

::: demo 基础用法
```html
<bs-breadcrumb>
  <bs-breadcrumb-item>Home</bs-breadcrumb-item>
</bs-breadcrumb>
<bs-breadcrumb>
  <bs-breadcrumb-item route="/">Home</bs-breadcrumb-item>
  <bs-breadcrumb-item active>Library</bs-breadcrumb-item>
</bs-breadcrumb>
<bs-breadcrumb>
  <bs-breadcrumb-item route="/">Home</bs-breadcrumb-item>
  <bs-breadcrumb-item href="http://github.com/vbs-ui/vbs">Library</bs-breadcrumb-item>
  <bs-breadcrumb-item active>Data</bs-breadcrumb-item>
</bs-breadcrumb>
```
:::
