# Jumbotron
Lightweight, flexible component for showcasing hero unit style content.
*We not wrap a vue component for this, use css to build your jumbotron, remember to include scss file yourself*

::: demo Basic example
```html
<div class="jumbotron">
  <h1 class="display-3">Hello, world!</h1>
  <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
  <hr class="my-4">
  <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
  <p class="lead">
    <bs-button size="lg">Learn more</bs-button>
  </p>
</div>
```
:::

::: demo Full width and without rounded corners
```html
<div class="jumbotron jumbotron-fluid">
  <div class="container">
    <h1 class="display-3">Fluid jumbotron</h1>
    <p class="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
  </div>
</div>
```
:::
