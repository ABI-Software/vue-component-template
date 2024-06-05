# Vue Component Template Live Demo

## Live Demo

<div class="demo-container">
  <div class="demo-container-inner">
    <ClientOnly>
      <HelloWorld
        title="Vue Component Template"
      />
    </ClientOnly>
  </div>
</div>

<script setup>
import { defineClientComponent } from "vitepress";
import "./demo-styles.css";

const HelloWorld = defineClientComponent(() => {
  return import("../src/components/HelloWorld.vue");
})
</script>


## Code Preview

```js-vue
  <div class="your-outer-container">
    <HelloWorld
      title="Vue Component Template"
    />
  </div>

  <script>
    import HelloWorld from '@abi-software/hello-world'

    export default {
      components: { HelloWorld },
    }
  </script>
```
