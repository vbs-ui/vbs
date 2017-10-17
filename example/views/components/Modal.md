<script>
export default {
  data () {
    return {
      modal1: false
    }
  }
}
</script>
# Modal
Use Bootstrap's JavaScript modal plugin to add dialogs to your site for lightboxes, user notifications, or completely custom content.

::: demo Modal components
```html
<bs-button @click="modal1=true" ref="modal1Trigger">Open modal</bs-button>
<bs-modal v-model="modal1" title="Modal title" :trigger="$refs.modal1Trigger">
  <p>Woohoo, you're reading this text in a modal!</p>
  <template slot="footer">
    <bs-button type="secondary" @click="modal1=false">Close</bs-button>
    <bs-button @click="modal1=false">SaveChanges</bs-button>
  </template>
</bs-modal>
```
:::

::: doc props slots events
| Key       | Type    | Required | Default   | Description                        | Remark |
|-----------|---------|----------|-----------|------------------------------------|--------|
| size      | String  | false    |           | Avaliable values: `large`, 'small' |        |
| title     | String  | false    |           | modal head title                   |        |
| value     | Boolean | false    | false     | `v-model` binding                  |        |
| role      | String  | false    |           | modal role                         |        |
| ariaLabel | String  | false    |           | modal aria-labelledby              |        |
| backdrop  | Boolean | false    | true      | Includes a modal-backdrop element. Alternatively, specify static for a backdrop which doesn't close the modal on click.      |         |
| keyboard  | Boolean | false    | true      | Closes the modal when escape key is pressed |        |
| focus     | Boolean | false    | true      | Puts the focus on the modal when initialized. | Need to fix |
| trigger   | Object  | false    | null      | Dom element to trigger modal show  |        |

| Name      | Description     |
|-----------|-----------------|
| default   | Modal content   |
| title     | Modal title     |
| footer    | Modal foooter   |

| Name          | Description                     |
|---------------|---------------------------------|
| before-show   | Trigged before modal show       |
| shown         | Trigged after modal shown       |
| close         | Trigged after click close icon  |
| before-hide   | Trigged before modal hide       |
| hidden        | Trigged after modal hidden      |
| backdrop      | Trigged when click backdroped   |
| escape        | Trigged when escape keydown     |
:::
