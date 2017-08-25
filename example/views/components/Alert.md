# Alert
Provide contextual feedback messages for typical user actions with the handful of available and flexible alert messages.

::: demo 普通用法
```html
<bs-alert>This is a primary alert—check it out!</bs-alert>
<bs-alert type="secondary">This is a secondary alert—check it out!</bs-alert>
<bs-alert type="success">This is a success alert—check it out!</bs-alert>
<bs-alert type="danger">This is a danger alert—check it out!</bs-alert>
<bs-alert type="warning">This is a warning alert—check it out!</bs-alert>
<bs-alert type="info">This is a info alert—check it out!</bs-alert>
<bs-alert type="light">This is a light alert—check it out!</bs-alert>
<bs-alert type="dark">This is a dark alert—check it out!</bs-alert>
```
:::

::: demo Link color
```html
<bs-alert>This is a primary alert with <a href="#" class="alert-link">an example link</a>. Give it a click if you like.</bs-alert>
<bs-alert type="secondary">This is a secondary alert with <a href="#" class="alert-link">an example link</a>. Give it a click if you like.</bs-alert>
<bs-alert type="success">This is a success alert with <a href="#" class="alert-link">an example link</a>. Give it a click if you like.</bs-alert>
<bs-alert type="danger">This is a danger alert with <a href="#" class="alert-link">an example link</a>. Give it a click if you like.</bs-alert>
<bs-alert type="warning">This is a warning alert with <a href="#" class="alert-link">an example link</a>. Give it a click if you like.</bs-alert>
<bs-alert type="info">This is a info alert with <a href="#" class="alert-link">an example link</a>. Give it a click if you like.</bs-alert>
<bs-alert type="light">This is a light alert with <a href="#" class="alert-link">an example link</a>. Give it a click if you like.</bs-alert>
<bs-alert type="dark">This is a dark alert with <a href="#" class="alert-link">an example link</a>. Give it a click if you like.</bs-alert>
```
:::

::: demo Additional content
```html
<bs-alert type="success">
  <h4 class="alert-heading">Well done!</h4>
  <p>Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.</p>
  <hr>
  <p class="mb-0">Whenever you need to, be sure to use margin utilities to keep things nice and tidy.</p>
</bs-alert>
```
:::

::: demo Dismissing
```html
<bs-alert type="warning" closable>
  <strong>Holy guacamole!</strong> You should check in on some of those fields below.
</bs-alert>
```
:::
