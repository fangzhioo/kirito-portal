<template>
  <v-app>
    <nav-bar />
    <v-main>
      <v-container>
        <nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import NavBar from '@/components/NavBar';

export default {
  components: { NavBar },
};
</script>
