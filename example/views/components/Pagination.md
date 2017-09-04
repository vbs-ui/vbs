<script>
export default {
  data () {
    return {
      pagination1: 3,
      pagination2: 5
    }
  }
}
</script>

# Pagination
Documentation and examples for showing pagination to indicate a series of related content exists across multiple pages.

::: demo Examle
```html
<bs-pagination :pages="3" show-first show-last></bs-pagination>
```
:::

::: demo Working with icons
```html
<bs-pagination :pages="3" show-first show-last>
  <template slot="first">
    <span aria-hidden="true">&laquo;</span>
    <span class="sr-only">Previous</span>
  </template>
  <template slot="prev">
    <span aria-hidden="true">&lt;</span>
    <span class="sr-only">Previous</span>
  </template>
  <template slot="next">
    <span aria-hidden="true">&gt;</span>
    <span class="sr-only">Next</span>
  </template>
  <template slot="last">
    <span aria-hidden="true">&raquo;</span>
    <span class="sr-only">Next</span>
  </template>
</bs-pagination>
```
:::

::: demo Disabled and active states
```html
<bs-pagination :pages="3" v-model="pagination1" show-first show-last></bs-pagination>
```
:::

::: demo With many pages
```html
<bs-pagination :pages="20" v-model="pagination2" :limit="9"></bs-pagination>
```
:::

::: demo Sizing
```html
<bs-pagination :pages="3" size="lg"></bs-pagination>
<bs-pagination :pages="3" size="sm"></bs-pagination>
```
:::

::: demo Alignment
```html
<bs-pagination desc="Page navigation example" :pages="3" align="center"></bs-pagination>
<bs-pagination desc="Page navigation example" :pages="3" align="end"></bs-pagination>
```
:::
