<script>
export default {
  data () {
    return {
      active: false,
      selected1: ['1'],
      selected2: '1'
    }
  }
}
</script>

# Buttons
Bootstrap includes several predefined button styles, each serving its own semantic purpose, with a few extras thrown in for more control.

::: demo Button component
```html
<bs-button type="primary">Primary</bs-button>
<bs-button type="secondary">Secondary</bs-button>
<bs-button type="success">Success</bs-button>
<bs-button type="danger">Danger</bs-button>
<bs-button type="warning">Warning</bs-button>
<bs-button type="info">Info</bs-button>
<bs-button type="light">Light</bs-button>
<bs-button type="dark">Dark</bs-button>
<bs-button type="link">Link</bs-button>
```
:::

::: demo Outline buttons
```html
<bs-button type="primary" outline>Primary</bs-button>
<bs-button type="secondary" outline>Secondary</bs-button>
<bs-button type="success" outline>Success</bs-button>
<bs-button type="danger" outline>Danger</bs-button>
<bs-button type="warning" outline>Warning</bs-button>
<bs-button type="info" outline>Info</bs-button>
<bs-button type="light" outline>Light</bs-button>
<bs-button type="dark" outline>Dark</bs-button>
<bs-button type="link" outline>Link</bs-button>
```
:::

::: demo Sizes
```html
<bs-button type="primary" size="lg">Primary</bs-button>
<bs-button type="secondary" size="lg">Secondary</bs-button>
<bs-button type="primary" size="sm">Primary</bs-button>
<bs-button type="secondary" size="sm">Secondary</bs-button>
```
:::

::: demo Block buttons
```html
<bs-button type="primary" size="lg" block>Primary</bs-button>
<bs-button type="secondary" size="lg" block>Secondary</bs-button>
```
:::

::: demo Active state
```html
<bs-button type="primary" size="lg" active>Primary</bs-button>
<bs-button type="secondary" size="lg" active>Secondary</bs-button>
```
:::

::: demo Disabled state
```html
<bs-button type="primary" size="lg" disabled>Primary</bs-button>
<bs-button type="secondary" size="lg" disabled>Secondary</bs-button>
```
:::

::: demo Toggle states
```html
<bs-button type="primary" size="lg" :active.sync="active" togglable>Primary</bs-button>
```
:::

::: demo Checkbox and radio buttons
```html
<bs-button-group type="secondary" multiply>
  <bs-button-item v-model="selected1" value="1">Checkbox 1 (pre-checked)</bs-button-item>
  <bs-button-item v-model="selected1" value="2">Checkbox 2</bs-button-item>
  <bs-button-item v-model="selected1" value="3">Checkbox 3</bs-button-item>
</bs-button-group>
<bs-button-group type="secondary">
  <bs-button-item v-model="selected2" value="1">Checkbox 1 (pre-checked)</bs-button-item>
  <bs-button-item v-model="selected2" value="2">Checkbox 2</bs-button-item>
  <bs-button-item v-model="selected2" value="3">Checkbox 3</bs-button-item>
</bs-button-group>
```
:::
