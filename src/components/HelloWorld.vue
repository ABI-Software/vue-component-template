<script setup name="HelloWorld">
const props = defineProps({
  /**
   * The title of the component.
   */
  title: {
    type: String,
    required: true,
    default: '',
  },
})
</script>

<template>
  <h1>{{ title }}</h1>
</template>

<style scoped>
/* Component Styles */
</style>
