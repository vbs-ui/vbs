# Dropdowns
Toggle contextual overlays for displaying lists of links and more with the Bootstrap dropdown plugin.

::: demo Single button dropdowns
```html
<bs-dropdown type="secondary" label="Dropdown button">
  <bs-dropdown-item>Action</bs-dropdown-item>
  <bs-dropdown-item>Another action</bs-dropdown-item>
  <bs-dropdown-item>Something else here</bs-dropdown-item>
</bs-dropdown>
```
:::

::: demo With type and divider
```html
<bs-dropdown class="btn-group" type="primary" label="Primary">
  <bs-dropdown-item>Action</bs-dropdown-item>
  <bs-dropdown-item>Another action</bs-dropdown-item>
  <bs-dropdown-item>Something else here</bs-dropdown-item>
  <bs-dropdown-divider></bs-dropdown-divider>
  <bs-dropdown-item>Separated link</bs-dropdown-item>
</bs-dropdown>
<bs-dropdown class="btn-group" type="secondary" label="Secondary">
  <bs-dropdown-item>Action</bs-dropdown-item>
  <bs-dropdown-item>Another action</bs-dropdown-item>
  <bs-dropdown-item>Something else here</bs-dropdown-item>
  <bs-dropdown-divider></bs-dropdown-divider>
  <bs-dropdown-item>Separated link</bs-dropdown-item>
</bs-dropdown>
<bs-dropdown class="btn-group" type="success" label="Success">
  <bs-dropdown-item>Action</bs-dropdown-item>
  <bs-dropdown-item>Another action</bs-dropdown-item>
  <bs-dropdown-item>Something else here</bs-dropdown-item>
  <bs-dropdown-divider></bs-dropdown-divider>
  <bs-dropdown-item>Separated link</bs-dropdown-item>
</bs-dropdown>
<bs-dropdown class="btn-group" type="info" label="Info">
  <bs-dropdown-item>Action</bs-dropdown-item>
  <bs-dropdown-item>Another action</bs-dropdown-item>
  <bs-dropdown-item>Something else here</bs-dropdown-item>
  <bs-dropdown-divider></bs-dropdown-divider>
  <bs-dropdown-item>Separated link</bs-dropdown-item>
</bs-dropdown>
<bs-dropdown class="btn-group" type="warning" label="Warning">
  <bs-dropdown-item>Action</bs-dropdown-item>
  <bs-dropdown-item>Another action</bs-dropdown-item>
  <bs-dropdown-item>Something else here</bs-dropdown-item>
  <bs-dropdown-divider></bs-dropdown-divider>
  <bs-dropdown-item>Separated link</bs-dropdown-item>
</bs-dropdown>
<bs-dropdown class="btn-group" type="danger" label="Danger">
  <bs-dropdown-item>Action</bs-dropdown-item>
  <bs-dropdown-item>Another action</bs-dropdown-item>
  <bs-dropdown-item>Something else here</bs-dropdown-item>
  <bs-dropdown-divider></bs-dropdown-divider>
  <bs-dropdown-item>Separated link</bs-dropdown-item>
</bs-dropdown>
```
:::

::: demo Split button dropdowns
```html
<bs-dropdown class="btn-group" type="primary" split label="Primary">
  <bs-dropdown-item>Action</bs-dropdown-item>
  <bs-dropdown-item>Another action</bs-dropdown-item>
  <bs-dropdown-item>Something else here</bs-dropdown-item>
  <bs-dropdown-divider></bs-dropdown-divider>
  <bs-dropdown-item>Separated link</bs-dropdown-item>
</bs-dropdown>
<bs-dropdown class="btn-group" type="secondary" split label="Secondary">
  <bs-dropdown-item>Action</bs-dropdown-item>
  <bs-dropdown-item>Another action</bs-dropdown-item>
  <bs-dropdown-item>Something else here</bs-dropdown-item>
  <bs-dropdown-divider></bs-dropdown-divider>
  <bs-dropdown-item>Separated link</bs-dropdown-item>
</bs-dropdown>
<bs-dropdown class="btn-group" type="success" split label="Success">
  <bs-dropdown-item>Action</bs-dropdown-item>
  <bs-dropdown-item>Another action</bs-dropdown-item>
  <bs-dropdown-item>Something else here</bs-dropdown-item>
  <bs-dropdown-divider></bs-dropdown-divider>
  <bs-dropdown-item>Separated link</bs-dropdown-item>
</bs-dropdown>
<bs-dropdown class="btn-group" type="info" split label="Info">
  <bs-dropdown-item>Action</bs-dropdown-item>
  <bs-dropdown-item>Another action</bs-dropdown-item>
  <bs-dropdown-item>Something else here</bs-dropdown-item>
  <bs-dropdown-divider></bs-dropdown-divider>
  <bs-dropdown-item>Separated link</bs-dropdown-item>
</bs-dropdown>
<bs-dropdown class="btn-group" type="warning" split label="Warning">
  <bs-dropdown-item>Action</bs-dropdown-item>
  <bs-dropdown-item>Another action</bs-dropdown-item>
  <bs-dropdown-item>Something else here</bs-dropdown-item>
  <bs-dropdown-divider></bs-dropdown-divider>
  <bs-dropdown-item>Separated link</bs-dropdown-item>
</bs-dropdown>
<bs-dropdown class="btn-group" type="danger" split label="Danger">
  <bs-dropdown-item>Action</bs-dropdown-item>
  <bs-dropdown-item>Another action</bs-dropdown-item>
  <bs-dropdown-item>Something else here</bs-dropdown-item>
  <bs-dropdown-divider></bs-dropdown-divider>
  <bs-dropdown-item>Separated link</bs-dropdown-item>
</bs-dropdown>
```
:::

::: demo Sizing
```html
<div class="btn-toolbar" role="toolbar">
  <bs-dropdown class="btn-group" type="secondary" size="lg" label="Large button">
    <bs-dropdown-item>Action</bs-dropdown-item>
    <bs-dropdown-item>Another action</bs-dropdown-item>
    <bs-dropdown-item>Something else here</bs-dropdown-item>
    <bs-dropdown-divider></bs-dropdown-divider>
    <bs-dropdown-item>Separated link</bs-dropdown-item>
  </bs-dropdown>
  <bs-dropdown class="btn-group ml-2" type="secondary" split size="lg" label="Large split button">
    <bs-dropdown-item>Action</bs-dropdown-item>
    <bs-dropdown-item>Another action</bs-dropdown-item>
    <bs-dropdown-item>Something else here</bs-dropdown-item>
    <bs-dropdown-divider></bs-dropdown-divider>
    <bs-dropdown-item>Separated link</bs-dropdown-item>
  </bs-dropdown>
</div>
<div class="btn-toolbar" role="toolbar">
  <bs-dropdown class="btn-group" type="secondary" size="sm" label="Small button">
    <bs-dropdown-item>Action</bs-dropdown-item>
    <bs-dropdown-item>Another action</bs-dropdown-item>
    <bs-dropdown-item>Something else here</bs-dropdown-item>
    <bs-dropdown-divider></bs-dropdown-divider>
    <bs-dropdown-item>Separated link</bs-dropdown-item>
  </bs-dropdown>
  <bs-dropdown class="btn-group ml-2" type="secondary" split size="sm" label="Small split button">
    <bs-dropdown-item>Action</bs-dropdown-item>
    <bs-dropdown-item>Another action</bs-dropdown-item>
    <bs-dropdown-item>Something else here</bs-dropdown-item>
    <bs-dropdown-divider></bs-dropdown-divider>
    <bs-dropdown-item>Separated link</bs-dropdown-item>
  </bs-dropdown>
</div>
```
:::

::: demo Dropup variation
```html
<bs-dropdown type="secondary" class="btn-group" up label="Dropup">
  <bs-dropdown-item tag="button">Action</bs-dropdown-item>
  <bs-dropdown-item tag="button">Another action</bs-dropdown-item>
  <bs-dropdown-item tag="button">Something else here</bs-dropdown-item>
</bs-dropdown>
<bs-dropdown type="secondary" class="btn-group" up split label="Split dropup">
  <bs-dropdown-item tag="button">Action</bs-dropdown-item>
  <bs-dropdown-item tag="button">Another action</bs-dropdown-item>
  <bs-dropdown-item tag="button">Something else here</bs-dropdown-item>
</bs-dropdown>
```
:::

::: demo Menu items
```html
<bs-dropdown type="secondary" label="Dropdown">
  <bs-dropdown-item tag="button">Action</bs-dropdown-item>
  <bs-dropdown-item tag="button">Another action</bs-dropdown-item>
  <bs-dropdown-item tag="button">Something else here</bs-dropdown-item>
</bs-dropdown>
```
:::

::: demo Menu alignment
```html
<bs-dropdown type="secondary" align="right" label="This dropdown's menu is right-aligned">
  <bs-dropdown-item>Action</bs-dropdown-item>
  <bs-dropdown-item>Another action</bs-dropdown-item>
  <bs-dropdown-item>Something else here</bs-dropdown-item>
</bs-dropdown>
```
:::

::: demo Menu headers and divider and disabled
```html
<bs-dropdown type="secondary" label="Dropdown">
  <h6 class="dropdown-header">Dropdown header</h6>
  <bs-dropdown-item>Action</bs-dropdown-item>
  <bs-dropdown-item disabled>Another action</bs-dropdown-item>
  <div class="dropdown-divider"></div>
  <bs-dropdown-item>Separated link</bs-dropdown-item>
</bs-dropdown>
```
:::

::: demo Menu forms
```html
<bs-dropdown type="secondary" label="Dropdown">
  <form class="px-4 py-3">
    <div class="form-group">
      <label for="exampleDropdownFormEmail1">Email address</label>
      <input type="email" class="form-control" id="exampleDropdownFormEmail1" placeholder="email@example.com">
    </div>
    <div class="form-group">
      <label for="exampleDropdownFormPassword1">Password</label>
      <input type="password" class="form-control" id="exampleDropdownFormPassword1" placeholder="Password">
    </div>
    <div class="form-check">
      <label class="form-check-label">
        <input type="checkbox" class="form-check-input">
        Remember me
      </label>
    </div>
    <button type="submit" class="btn btn-primary">Sign in</button>
  </form>
  <bs-dropdown-divider></bs-dropdown-divider>
  <bs-dropdown-item>New around here? Sign up</bs-dropdown-item>
  <bs-dropdown-item>Forgot password?</bs-dropdown-item>
</bs-dropdown>
```
:::

::: demo Another menu forms example
```html
<bs-dropdown type="secondary" label="Dropdown">
  <div class="form-group">
    <label for="exampleDropdownFormEmail2">Email address</label>
    <input type="email" class="form-control" id="exampleDropdownFormEmail2" placeholder="email@example.com">
  </div>
  <div class="form-group">
    <label for="exampleDropdownFormPassword2">Password</label>
    <input type="password" class="form-control" id="exampleDropdownFormPassword2" placeholder="Password">
  </div>
  <div class="form-check">
    <label class="form-check-label">
      <input type="checkbox" class="form-check-input">
      Remember me
    </label>
  </div>
  <button type="submit" class="btn btn-primary">Sign in</button>
</bs-dropdown>
```
:::
