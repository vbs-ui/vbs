<script>
export default {
  data () {
    return {
      img_318_180: 'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22318%22%20height%3D%22180%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20318%20180%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_15ea7b17249%20text%20%7B%20fill%3Argba(255%2C255%2C255%2C.75)%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A16pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_15ea7b17249%22%3E%3Crect%20width%3D%22318%22%20height%3D%22180%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22118.0859375%22%20y%3D%2297.2%22%3E318x180%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E',
      img_cap: 'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22318%22%20height%3D%22180%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20318%20180%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_15ea7b1724d%20text%20%7B%20fill%3Argba(255%2C255%2C255%2C.75)%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A16pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_15ea7b1724d%22%3E%3Crect%20width%3D%22318%22%20height%3D%22180%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22109.1328125%22%20y%3D%2297.2%22%3EImage%20cap%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E'
    }
  }
}
</script>

# Cards
Bootstrap's cards provide a flexible and extensible content container with multiple variants and options.

::: demo Example
```html
<bs-card style="width:20rem" :imgs="img_318_180">
  <h4 class="card-title">Card title</h4>
  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  <bs-button>Go somewhere</bs-button>
</bs-card>
```
:::

::: demo Titles, text, and links
```html
<bs-card style="width:20rem">
  <h4 class="card-title">Card title</h4>
  <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  <a href="#" class="card-link">Card link</a>
  <a href="#" class="card-link">Another link</a>
</bs-card>
```
:::

::: demo Images top or bottom
```html
<bs-card style="width:20rem" :imgs="{top:{src:img_cap,alt:'Card image cap'}}">
  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
</bs-card>
```
:::

::: demo List groups
```html
<bs-card style="width:20rem">
  <bs-list-group>
    <bs-list-group-item>Cras justo odio</bs-list-group-item>
    <bs-list-group-item>Dapibus ac facilisis in</bs-list-group-item>
    <bs-list-group-item>Vestibulum at eros</bs-list-group-item>
  </bs-list-group>
</bs-card>
```
:::

::: demo Kitchen sink
```html
<bs-card style="width:20rem" :imgs="img_cap">
  <template slot="custom">
    <div class="card-body">
      <h4 class="card-title">Card title</h4>
      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">Cras justo odio</li>
      <li class="list-group-item">Dapibus ac facilisis in</li>
      <li class="list-group-item">Vestibulum at eros</li>
    </ul>
    <div class="card-body">
      <a href="#" class="card-link">Card link</a>
      <a href="#" class="card-link">Another link</a>
    </div>
  </template>
</bs-card>
```
:::

::: demo Header and footer
```html
<bs-card>
  <template slot="header">Featured</template>
  <h4 class="card-title">Special title treatment</h4>
  <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
  <bs-button>Go somewhere</bs-button>
</bs-card>
<bs-card header-tag="h4">
  <template slot="header">Featured</template>
  <h4 class="card-title">Special title treatment</h4>
  <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
  <bs-button>Go somewhere</bs-button>
</bs-card>
<bs-card>
  <template slot="header">Quote</template>
  <blockquote class="blockquote mb-0">
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
    <footer class="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite></footer>
  </blockquote>
</bs-card>
<bs-card class="text-center" footer-class="text-muted">
  <template slot="header">Featured</template>
  <h4 class="card-title">Special title treatment</h4>
  <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
  <bs-button>Go somewhere</bs-button>
  <template slot="footer">2 days ago</template>
</bs-card>
```
:::

::: demo Sizing
```html
<div class="row">
  <div class="col-sm-6">
    <bs-card>
      <h4 class="card-title">Special title treatment</h4>
      <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
      <bs-button>Go somewhere</bs-button>
    </bs-card>
  </div>
  <div class="col-sm-6">
    <bs-card>
      <h4 class="card-title">Special title treatment</h4>
      <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
      <bs-button>Go somewhere</bs-button>
    </bs-card>
  </div>
</div>
```
:::

::: demo Using utilities
```html
<bs-card class="w-75">
  <h4 class="card-title">Special title treatment</h4>
  <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
  <bs-button>Go somewhere</bs-button>
</bs-card>
<bs-card class="w-50">
  <h4 class="card-title">Special title treatment</h4>
  <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
  <bs-button>Go somewhere</bs-button>
</bs-card>
```
:::

::: demo Using custom CSS
```html
<bs-card style="width:20rem">
  <h4 class="card-title">Special title treatment</h4>
  <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
  <bs-button>Go somewhere</bs-button>
</bs-card>
```
:::

::: demo Text alignment
```html
<bs-card style="width:20rem">
  <h4 class="card-title">Special title treatment</h4>
  <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
  <bs-button>Go somewhere</bs-button>
</bs-card>
<bs-card class="text-center" style="width:20rem">
  <h4 class="card-title">Special title treatment</h4>
  <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
  <bs-button>Go somewhere</bs-button>
</bs-card>
<bs-card class="text-right" style="width:20rem">
  <h4 class="card-title">Special title treatment</h4>
  <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
  <bs-button>Go somewhere</bs-button>
</bs-card>
```
:::
