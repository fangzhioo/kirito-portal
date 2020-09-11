<template>
  <nuxt-child />
</template>

<script>
export default {
  layout: 'studioLayout',
  middleware: 'auth',
};
</script>
