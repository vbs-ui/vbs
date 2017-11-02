<script>
export default {
  data () {
    return {
      activeItem1: 'home',
      activeItem2: 2
    }
  }
}
</script>

# Navs
Documentation and examples for how to use Bootstrap's included navigation components.

::: demo Base nav
```html
<bs-nav>
  <bs-nav-item label="Active"></bs-nav-item>
  <bs-nav-item label="Link"></bs-nav-item>
  <bs-nav-item label="Link"></bs-nav-item>
  <bs-nav-item label="Disabled" disabled></bs-nav-item>
</bs-nav>
```
:::

::: demo Horizontal alignment
```html
<bs-nav clz="justify-content-center">
  <bs-nav-item label="Active"></bs-nav-item>
  <bs-nav-item label="Link"></bs-nav-item>
  <bs-nav-item label="Link"></bs-nav-item>
  <bs-nav-item label="Disabled" disabled></bs-nav-item>
</bs-nav>
```
:::

::: demo Right-aligned
```html
<bs-nav clz="justify-content-end">
  <bs-nav-item label="Active"></bs-nav-item>
  <bs-nav-item label="Link"></bs-nav-item>
  <bs-nav-item label="Link"></bs-nav-item>
  <bs-nav-item label="Disabled" disabled></bs-nav-item>
</bs-nav>
```
:::

::: demo Vertical
```html
<bs-nav clz="flex-column">
  <bs-nav-item label="Active"></bs-nav-item>
  <bs-nav-item label="Link"></bs-nav-item>
  <bs-nav-item label="Link"></bs-nav-item>
  <bs-nav-item label="Disabled" disabled></bs-nav-item>
</bs-nav>
```
:::

::: demo Tabs
```html
<bs-nav tab>
  <bs-nav-item label="Active"></bs-nav-item>
  <bs-nav-item label="Link"></bs-nav-item>
  <bs-nav-item label="Link"></bs-nav-item>
  <bs-nav-item label="Disabled" disabled></bs-nav-item>
</bs-nav>
```
:::

::: demo Pills
```html
<bs-nav pill>
  <bs-nav-item label="Active"></bs-nav-item>
  <bs-nav-item label="Link"></bs-nav-item>
  <bs-nav-item label="Link"></bs-nav-item>
  <bs-nav-item label="Disabled" disabled></bs-nav-item>
</bs-nav>
```
:::

::: demo Fill
```html
<bs-nav pill fill>
  <bs-nav-item label="Active"></bs-nav-item>
  <bs-nav-item label="Longer nav link"></bs-nav-item>
  <bs-nav-item label="Link"></bs-nav-item>
  <bs-nav-item label="Disabled" disabled>Disabled</bs-nav-item>
</bs-nav>
```
:::

::: demo Justified
```html
<bs-nav pill justified>
  <bs-nav-item label="Active"></bs-nav-item>
  <bs-nav-item label="Longer nav link"></bs-nav-item>
  <bs-nav-item label="Link"></bs-nav-item>
  <bs-nav-item label="Disabled" disabled></bs-nav-item>
</bs-nav>
```
:::

::: demo Working with flex utilities
```html
<bs-nav pill clz="flex-column flex-sm-row">
  <bs-nav-item label="Active"></bs-nav-item>
  <bs-nav-item label="Longer nav link"></bs-nav-item>
  <bs-nav-item label="Link"></bs-nav-item>
  <bs-nav-item label="Disabled" disabled></bs-nav-item>
</bs-nav>
```
:::

::: demo Wrap with nav
```html
<nav role="navigation">
  <bs-nav pill>
    <bs-nav-item label="Active"></bs-nav-item>
    <bs-nav-item label="Link"></bs-nav-item>
    <bs-nav-item label="Link"></bs-nav-item>
    <bs-nav-item label="Disabled" disabled></bs-nav-item>
  </bs-nav>
</nav>
```
:::

::: demo Tabs/Pills with dropdowns
```html
<b>Not supported!</b>
```
:::

::: demo bd-example-tabs | Using `v-model` and string value
```html
<bs-nav tab v-model="activeItem1">
  <bs-nav-item label="Active" name="home">
    Et et consectetur ipsum labore excepteur est proident excepteur ad velit occaecat qui minim occaecat veniam. Fugiat veniam incididunt anim aliqua enim pariatur veniam sunt est aute sit dolor anim. Velit non irure adipisicing aliqua ullamco irure incididunt irure non esse consectetur nostrud minim non minim occaecat. Amet duis do nisi duis veniam non est eiusmod tempor incididunt tempor dolor ipsum in qui sit. Exercitation mollit sit culpa nisi culpa non adipisicing reprehenderit do dolore. Duis reprehenderit occaecat anim ullamco ad duis occaecat ex.
  </bs-nav-item>
  <bs-nav-item label="Profile" name="profile">
    Nulla est ullamco ut irure incididunt nulla Lorem Lorem minim irure officia enim reprehenderit. Magna duis labore cillum sint adipisicing exercitation ipsum. Nostrud ut anim non exercitation velit laboris fugiat cupidatat. Commodo esse dolore fugiat sint velit ullamco magna consequat voluptate minim amet aliquip ipsum aute laboris nisi. Labore labore veniam irure irure ipsum pariatur mollit magna in cupidatat dolore magna irure esse tempor ad mollit. Dolore commodo nulla minim amet ipsum officia consectetur amet ullamco voluptate nisi commodo ea sit eu.
  </bs-nav-item>
  <bs-nav-item label="Link" name="link">
    Sint sit mollit irure quis est nostrud cillum consequat Lorem esse do quis dolor esse fugiat sunt do. Eu ex commodo veniam Lorem aliquip laborum occaecat qui Lorem esse mollit dolore anim cupidatat. Deserunt officia id Lorem nostrud aute id commodo elit eiusmod enim irure amet eiusmod qui reprehenderit nostrud tempor. Fugiat ipsum excepteur in aliqua non et quis aliquip ad irure in labore cillum elit enim. Consequat aliquip incididunt ipsum et minim laborum laborum laborum et cillum labore. Deserunt adipisicing cillum id nulla minim nostrud labore eiusmod et amet. Laboris consequat consequat commodo non ut non aliquip reprehenderit nulla anim occaecat. Sunt sit ullamco reprehenderit irure ea ullamco Lorem aute nostrud magna.
  </bs-nav-item>
  <bs-nav-item label="Disabled" name="disabled" disabled></bs-nav-item>
</bs-nav>
```
:::

::: demo bd-example-tabs | Using `v-model` and no value
```html
<bs-nav pill v-model="activeItem2" clz="mb-3">
  <bs-nav-item label="Active">
    Et et consectetur ipsum labore excepteur est proident excepteur ad velit occaecat qui minim occaecat veniam. Fugiat veniam incididunt anim aliqua enim pariatur veniam sunt est aute sit dolor anim. Velit non irure adipisicing aliqua ullamco irure incididunt irure non esse consectetur nostrud minim non minim occaecat. Amet duis do nisi duis veniam non est eiusmod tempor incididunt tempor dolor ipsum in qui sit. Exercitation mollit sit culpa nisi culpa non adipisicing reprehenderit do dolore. Duis reprehenderit occaecat anim ullamco ad duis occaecat ex.
  </bs-nav-item>
  <bs-nav-item label="Profile">
    Nulla est ullamco ut irure incididunt nulla Lorem Lorem minim irure officia enim reprehenderit. Magna duis labore cillum sint adipisicing exercitation ipsum. Nostrud ut anim non exercitation velit laboris fugiat cupidatat. Commodo esse dolore fugiat sint velit ullamco magna consequat voluptate minim amet aliquip ipsum aute laboris nisi. Labore labore veniam irure irure ipsum pariatur mollit magna in cupidatat dolore magna irure esse tempor ad mollit. Dolore commodo nulla minim amet ipsum officia consectetur amet ullamco voluptate nisi commodo ea sit eu.
  </bs-nav-item>
  <bs-nav-item label="Link">
    Sint sit mollit irure quis est nostrud cillum consequat Lorem esse do quis dolor esse fugiat sunt do. Eu ex commodo veniam Lorem aliquip laborum occaecat qui Lorem esse mollit dolore anim cupidatat. Deserunt officia id Lorem nostrud aute id commodo elit eiusmod enim irure amet eiusmod qui reprehenderit nostrud tempor. Fugiat ipsum excepteur in aliqua non et quis aliquip ad irure in labore cillum elit enim. Consequat aliquip incididunt ipsum et minim laborum laborum laborum et cillum labore. Deserunt adipisicing cillum id nulla minim nostrud labore eiusmod et amet. Laboris consequat consequat commodo non ut non aliquip reprehenderit nulla anim occaecat. Sunt sit ullamco reprehenderit irure ea ullamco Lorem aute nostrud magna.
  </bs-nav-item>
  <bs-nav-item label="Disabled" disabled></bs-nav-item>
</bs-nav>
```
:::
