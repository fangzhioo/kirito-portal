<template>
  <v-icon>{{ name }}</v-icon>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: () => '',
    },
  },
};
</script>
