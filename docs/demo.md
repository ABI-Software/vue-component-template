# Vue Component Template Live Demo

## Live Demo

<div class="demo-container">
  <div class="demo-container-inner">
    <ClientOnly>
      <VueComponentTemplate
        title="Vue Component Template"
      />
    </ClientOnly>
  </div>
</div>

<script setup>
import { defineClientComponent } from "vitepress";
import "./demo-styles.css";

const VueComponentTemplate = defineClientComponent(() => {
  return import("../src/components/VueComponentTemplate.vue");
})
</script>


## Code Preview

```js-vue
  <div class="your-outer-container">
    <VueComponentTemplate
      title="Vue Component Template"
    />
  </div>

  <script>
    import VueComponentTemplate from '@abi-software/vue-component-template'

    export default {
      components: { VueComponentTemplate },
    }
  </script>
```
