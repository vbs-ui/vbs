<script>
export default {
  data () {
    return {
      animated: false
    }
  }
}
</script>
# Progress
Documentation and examples for using Bootstrap custom progress bars featuring support for stacked bars, animated backgrounds, and text labels.

::: demo Examples
```html
<bs-progress></bs-progress>
<bs-progress value="25"></bs-progress>
<bs-progress value="50"></bs-progress>
<bs-progress value="75"></bs-progress>
<bs-progress value="100"></bs-progress>
```
:::

::: demo Labels
```html
<bs-progress value="25">25%</bs-progress>
```
:::

::: demo Height
```html
<bs-progress value="25" style="height:1px"></bs-progress>
<bs-progress value="25" style="height:20px"></bs-progress>
```
:::

::: demo Backgrounds
```html
<bs-progress type="success" value="25"></bs-progress>
<bs-progress type="info" value="50"></bs-progress>
<bs-progress type="warning" value="75"></bs-progress>
<bs-progress type="danger" value="100"></bs-progress>
```
:::

::: demo Multiple bars
```html
<bs-progress :value="[15,{value:'30',type:'success'},{value:20,type:'info'}]"></bs-progress>
```
:::

::: demo Striped
```html
<bs-progress value="10" striped></bs-progress>
<bs-progress type="success" value="25" striped></bs-progress>
<bs-progress type="info" value="50" striped></bs-progress>
<bs-progress type="warning" value="75" striped></bs-progress>
<bs-progress type="danger" value="100" striped></bs-progress>
```
:::

::: demo Animated stripes
```html
<bs-progress value="75" striped :animated="animated">75%</bs-progress>
<bs-button type="secondary" @click="animated=!animated">Toggle animation</bs-button>
```
:::
