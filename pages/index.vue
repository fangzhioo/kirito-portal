<template>
  <div id="home" class="pa-4">
    <v-container fluid>
      <h3 class="headline font-weight-medium">Recommended</h3>
      <v-row>
        <v-col v-for="i in loading ? 10 : 12" :key="i" cols="12" sm="6" md="4" lg="3" class="mx-xs-auto">
          <v-skeleton-loader type="card-avatar" :loading="loading">
            <video-card :card="{ maxWidth: 350 }" :video="video" :channel="channel"></video-card>
          </v-skeleton-loader>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import videoCard from '@/components/VideoCard';

export default {
  name: 'Home',
  components: {
    videoCard,
  },
  data: () => ({
    loading: true,
    video: {
      url: '/watch/12',
      thumb: 'https://cdn.vuetifyjs.com/images/cards/sunshine.jpg',
      title: 'Top western road trips',
      views: '9.6k',
      createdAt: '6 hours ago',
    },
    channel: {
      url: '/channels/12',
      avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
    },
  }),
  mounted() {
    setTimeout(() => {
      this.loading = false;
    }, 3000);
  },
};
</script>
