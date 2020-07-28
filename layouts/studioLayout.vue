<template>
  <v-app>
    <studio-nav-bar />
    <v-main>
      <v-container>
        <nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import StudioNavBar from '@/components/StudioNavBar';

export default {
  components: { StudioNavBar },
};
</script>
