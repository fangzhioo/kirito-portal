<template>
  <div id="home" class="pa-4">
    <v-container fluid>
      <h3 class="headline font-weight-medium">Recommended</h3>
      <v-row>
        <v-col v-for="(item, i) in list" :key="i" cols="12" sm="6" md="4" lg="3" class="mx-xs-auto">
          <v-skeleton-loader type="card-avatar" :loading="loading">
            <video-card :card="{ maxWidth: 350 }" :video="item"></video-card>
          </v-skeleton-loader>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';
import videoCard from '~/components/VideoCard.vue';

@Component({
  name: 'Home',
  components: { videoCard },
})
export default class HomePage extends Vue {
  loading: boolean = true;

  get list() {
    return this.$store.state.home.recommendList || [];
  }

  mounted() {
    this.$store
      .dispatch({
        type: 'home/fetchRecommendList',
        payload: {},
      })
      .finally(() => {
        this.loading = false;
      });
  }
}
</script>
