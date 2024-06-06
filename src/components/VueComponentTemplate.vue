<script setup name="VueComponentTemplate">
defineProps({
  /**
   * The title of the component.
   */
  title: {
    type: String,
    required: true,
    default: '',
  },
});
</script>

<template>
  <h1>{{ title }}</h1>
</template>

<style scoped lang="scss">
/* Component Styles */
</style>
