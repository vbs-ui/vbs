# Badges
Documentation and examples for badges, our small count and labeling component.

::: demo Badges scale to match the size of the immediate parent element by using relative font sizing and em units.
```html
<h1>Example heading <bs-badge type="secondary">New</bs-badge></h1>
<h2>Example heading <bs-badge type="secondary">New</bs-badge></h2>
<h3>Example heading <bs-badge type="secondary">New</bs-badge></h3>
<h4>Example heading <bs-badge type="secondary">New</bs-badge></h4>
<h5>Example heading <bs-badge type="secondary">New</bs-badge></h5>
<h6>Example heading <bs-badge type="secondary">New</bs-badge></h6>
```
:::

::: demo Using with button
```html
<bs-button>
  Notifications <bs-badge type="light">4</bs-badge>
  <span class="sr-only">unread messages</span>
</bs-button>
```
:::

::: demo Contextual variations
```html
<bs-badge>Primary</bs-badge>
<bs-badge type="secondary">Secondary</bs-badge>
<bs-badge type="success">Success</bs-badge>
<bs-badge type="danger">Danger</bs-badge>
<bs-badge type="warning">Warning</bs-badge>
<bs-badge type="info">Info</bs-badge>
<bs-badge type="light">Light</bs-badge>
<bs-badge type="dark">Dark</bs-badge>
```
:::

::: demo Pill badges
```html
<bs-badge pill>Primary</bs-badge>
<bs-badge pill type="secondary">Secondary</bs-badge>
<bs-badge pill type="success">Success</bs-badge>
<bs-badge pill type="danger">Danger</bs-badge>
<bs-badge pill type="warning">Warning</bs-badge>
<bs-badge pill type="info">Info</bs-badge>
<bs-badge pill type="light">Light</bs-badge>
<bs-badge pill type="dark">Dark</bs-badge>
```
:::

::: demo Links
```html
<bs-badge actionable>Primary</bs-badge>
<bs-badge actionable type="secondary">Secondary</bs-badge>
<bs-badge actionable type="success">Success</bs-badge>
<bs-badge actionable type="danger">Danger</bs-badge>
<bs-badge actionable type="warning">Warning</bs-badge>
<bs-badge actionable type="info">Info</bs-badge>
<bs-badge actionable type="light">Light</bs-badge>
<bs-badge actionable type="dark">Dark</bs-badge>
```
:::
