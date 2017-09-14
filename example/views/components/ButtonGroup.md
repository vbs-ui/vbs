<script>
export default {
  data () {
    return {
      model1: ''
    }
  }
}
</script>

# Button group
Group a series of buttons together on a single line with the button group, and super-power them with JavaScript.

::: demo Basic example
```html
<bs-button-group>
  <bs-button-item v-model="model1" value="left" type="secondary">Left</bs-button-item>
  <bs-button-item v-model="model1" value="middle" type="secondary">Middle</bs-button-item>
  <bs-button-item v-model="model1" value="right" type="secondary">Right</bs-button-item>
</bs-button-group>
```
:::
