<template>
  <div id="channel-home">
    <v-parallax height="230" src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"></v-parallax>
    <div class="nav-bgcolor">
      <div id="channel-header">
        <v-container class="py-0">
          <v-row class="justify-space-between">
            <v-col cols="12" sm="5" md="5" lg="5" offset-md="1">
              <v-card class="transparent" flat>
                <v-list-item three-line>
                  <v-list-item-avatar size="80"><v-img :src="avatar" :alt="nickName"></v-img></v-list-item-avatar>
                  <v-list-item-content class="align-self-auto">
                    <v-list-item-title class="headline mb-1">{{ nickName }}</v-list-item-title>
                    <v-list-item-subtitle>{{ subscribers }} subscribers </v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
              </v-card>
            </v-col>
            <v-col cols="12" sm="5" md="3" lg="3">
              <v-btn class="red white--text mt-6" tile large depressed>Subscribed</v-btn>
              <v-btn icon class="ml-5 mt-6"><v-icon>mdi-bell</v-icon></v-btn>
            </v-col>
          </v-row>
        </v-container>
      </div>
      <v-card flat class="transparent">
        <v-tabs v-model="tab" background-color="transparent" show-arrows centered center-active>
          <v-tab v-for="(item, i) in items" :key="i">
            {{ item }}
          </v-tab>
        </v-tabs>

        <v-container fluid>
          <v-tabs-items v-model="tab" class="transparent">
            <v-tab-item>
              <v-card class="transparent" flat>
                <v-card-title>Uploads</v-card-title>
                <v-slide-group class="pa-4" multiple show-arrows>
                  <v-slide-item v-for="i in loading ? 5 : 10" :key="i">
                    <v-skeleton-loader type="card-avatar" :loading="loading" width="250px" class="mr-1">
                      <video-card
                        :card="{ maxWidth: 250, type: 'noAvatar' }"
                        :video="video"
                        :channel="channel"
                      ></video-card>
                    </v-skeleton-loader>
                  </v-slide-item>
                </v-slide-group>
              </v-card>
            </v-tab-item>
            <v-tab-item>
              <v-card class="transparent" flat>
                <v-card-title>Uploads</v-card-title>
                <v-row>
                  <v-col v-for="i in loading ? 10 : 12" :key="i" cols="12" sm="6" md="4" lg="3" class="mx-xs-auto">
                    <v-skeleton-loader type="card-avatar" :loading="loading">
                      <video-card :card="{ maxWidth: 350 }" :video="video" :channel="channel"></video-card>
                    </v-skeleton-loader>
                  </v-col>
                </v-row>
                <v-card-text>home</v-card-text>
              </v-card>
            </v-tab-item>
          </v-tabs-items>
        </v-container>
      </v-card>
    </div>
  </div>
</template>

<script>
import VideoCard from '@/components/VideoCard';
export default {
  components: {
    VideoCard,
  },
  data: () => ({
    tab: null,
    loading: true,
    items: ['Home', 'Videos', 'Playlists', 'Community', 'Channels', 'About'],
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
  computed: {
    subscribers: {
      get() {
        return this.$store.getters['user/subscribers'];
      },
    },
    avatar: {
      get() {
        return this.$store.getters['user/avatar'];
      },
    },
    email: {
      get() {
        return this.$store.getters['user/email'];
      },
    },
    nickName: {
      get() {
        return this.$store.getters['user/nickName'];
      },
    },
  },
  mounted() {
    setTimeout(() => {
      this.loading = false;
    }, 3000);
  },
};
</script>

<style lang="scss">
#channel-home {
  .nav-bgcolor {
    background: #f9f9f9;
  }

  .card {
    background: #f9f9f9 !important;
  }

  .v-tab {
    margin-right: 4em;
  }

  .v-list-item--link::before {
    background-color: transparent;
  }
}
</style>
