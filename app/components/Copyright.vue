<template>
  <v-footer :absolute="fixed" app>
    <div class="text-center">
      <span>&copy; Copyright 2019 - {{ new Date().getFullYear() }}</span>
    </div>
  </v-footer>
</template>

<script>
export default {
  props: {
    fixed: {
      type: Boolean,
      default: () => false,
    },
  },
};
</script>
