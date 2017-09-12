# List group
List groups are a flexible and powerful component for displaying a series of content. Modify and extend them to support just about any content within.

::: demo Basic example
```html
<bs-list-group>
  <bs-list-group-item>Cras justo odio</bs-list-group-item>
  <bs-list-group-item>Dapibus ac facilisis in</bs-list-group-item>
  <bs-list-group-item>Morbi leo risus</bs-list-group-item>
  <bs-list-group-item>Porta ac consectetur ac</bs-list-group-item>
  <bs-list-group-item>Vestibulum at eros</bs-list-group-item>
</bs-list-group>
```
:::

::: demo Active items
```html
<bs-list-group>
  <bs-list-group-item active>Cras justo odio</bs-list-group-item>
  <bs-list-group-item>Dapibus ac facilisis in</bs-list-group-item>
  <bs-list-group-item>Morbi leo risus</bs-list-group-item>
  <bs-list-group-item>Porta ac consectetur ac</bs-list-group-item>
  <bs-list-group-item>Vestibulum at eros</bs-list-group-item>
</bs-list-group>
```
:::

::: demo Disabled items
```html
<bs-list-group>
  <bs-list-group-item disabled>Cras justo odio</bs-list-group-item>
  <bs-list-group-item>Dapibus ac facilisis in</bs-list-group-item>
  <bs-list-group-item>Morbi leo risus</bs-list-group-item>
  <bs-list-group-item>Porta ac consectetur ac</bs-list-group-item>
  <bs-list-group-item>Vestibulum at eros</bs-list-group-item>
</bs-list-group>
```
:::

::: demo Links and buttons
```html
<bs-list-group>
  <bs-list-group-item tag="a" active>Cras justo odio</bs-list-group-item>
  <bs-list-group-item tag="a">Dapibus ac facilisis in</bs-list-group-item>
  <bs-list-group-item tag="a">Morbi leo risus</bs-list-group-item>
  <bs-list-group-item tag="a">Porta ac consectetur ac</bs-list-group-item>
  <bs-list-group-item tag="a">Vestibulum at eros</bs-list-group-item>
</bs-list-group>

<bs-list-group style="margin-top:16px;">
  <bs-list-group-item tag="button" active>Cras justo odio</bs-list-group-item>
  <bs-list-group-item tag="button">Dapibus ac facilisis in</bs-list-group-item>
  <bs-list-group-item tag="button">Morbi leo risus</bs-list-group-item>
  <bs-list-group-item tag="button">Porta ac consectetur ac</bs-list-group-item>
  <bs-list-group-item tag="button">Vestibulum at eros</bs-list-group-item>
</bs-list-group>
```
:::

::: demo Contextual classes
```html
<bs-list-group>
  <bs-list-group-item>Dapibus ac facilisis in</bs-list-group-item>
  <bs-list-group-item type="primary">This is a primary list group item</bs-list-group-item>
  <bs-list-group-item type="secondary">This is a secondary list group item</bs-list-group-item>
  <bs-list-group-item type="success">This is a success list group item</bs-list-group-item>
  <bs-list-group-item type="danger">This is a danger list group item</bs-list-group-item>
  <bs-list-group-item type="warning">This is a warning list group item</bs-list-group-item>
  <bs-list-group-item type="info">This is a info list group item</bs-list-group-item>
  <bs-list-group-item type="light">This is a light list group item</bs-list-group-item>
  <bs-list-group-item type="dark">This is a dark list group item</bs-list-group-item>
</bs-list-group>
```
:::

::: demo Contextual classes with hover and active status
```html
<bs-list-group>
  <bs-list-group-item>Dapibus ac facilisis in</bs-list-group-item>
  <bs-list-group-item tag="a" type="primary" active>This is a primary list group item</bs-list-group-item>
  <bs-list-group-item tag="a" type="secondary">This is a secondary list group item</bs-list-group-item>
  <bs-list-group-item tag="a" type="success">This is a success list group item</bs-list-group-item>
  <bs-list-group-item tag="a" type="danger">This is a danger list group item</bs-list-group-item>
  <bs-list-group-item tag="a" type="warning">This is a warning list group item</bs-list-group-item>
  <bs-list-group-item tag="a" type="info">This is a info list group item</bs-list-group-item>
  <bs-list-group-item tag="a" type="light">This is a light list group item</bs-list-group-item>
  <bs-list-group-item tag="a" type="dark">This is a dark list group item</bs-list-group-item>
</bs-list-group>
```
:::

::: demo With badges
```html
<bs-list-group>
  <bs-list-group-item class="d-flex justify-content-between align-items-center">
    Cras justo odio
    <bs-badge pill>14</bs-badge>
  </bs-list-group-item>
  <bs-list-group-item class="d-flex justify-content-between align-items-center">
    Dapibus ac facilisis in
    <bs-badge pill>2</bs-badge>
  </bs-list-group-item>
  <bs-list-group-item class="d-flex justify-content-between align-items-center">
    Morbi leo risus
    <bs-badge pill>1</bs-badge>
  </bs-list-group-item>
</bs-list-group>
```
:::

::: demo Custom content
```html
<bs-list-group>
  <bs-list-group-item tag="a" class="flex-column align-items-start" active>
    <div class="d-flex w-100 justify-content-between">
      <h5 class="mb-1">List group item heading</h5>
      <small>3 days ago</small>
    </div>
    <p class="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
    <small>Donec id elit non mi porta.</small>
  </bs-list-group-item>
  <bs-list-group-item tag="a">
    <div class="d-flex w-100 justify-content-between">
      <h5 class="mb-1">List group item heading</h5>
      <small class="text-muted">3 days ago</small>
    </div>
    <p class="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
    <small class="text-muted">Donec id elit non mi porta.</small>
  </bs-list-group-item>
  <bs-list-group-item tag="a">
    <div class="d-flex w-100 justify-content-between">
      <h5 class="mb-1">List group item heading</h5>
      <small class="text-muted">3 days ago</small>
    </div>
    <p class="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
    <small class="text-muted">Donec id elit non mi porta.</small>
  </bs-list-group-item>
</bs-list-group>
```
:::
