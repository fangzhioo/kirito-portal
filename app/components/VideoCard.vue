<template>
  <v-card class="content-bg card mx-auto" :max-width="card.maxWidth" flat tile router :to="`/watch/${video.videoId}`">
    <v-img :src="video.thumb || ''" height="200px"></v-img>
    <v-row no-gutters>
      <v-col v-if="card.type != 'noAvatar'" cols="2">
        <v-list-item class="pl-0 pt-3" router :to="`/channel/${video.authorId}`">
          <v-list-item-avatar color="grey darken-3">
            <v-img class="elevation-6" :src="video.authorAvatar"></v-img>
          </v-list-item-avatar>
        </v-list-item>
      </v-col>
      <v-col>
        <v-card-title class="pl-2 pt-3 subtitle-1 font-weight-bold">
          {{ video.title }}
        </v-card-title>

        <v-card-subtitle class="pl-2 pb-0">
          {{ video.authorNickname }}
        </v-card-subtitle>
        <v-card-subtitle class="pl-2 pt-0">
          {{ video.views }} views<v-icon>mdi-circle-small</v-icon>{{ video.gmtCreate }}
        </v-card-subtitle>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
export default {
  props: {
    video: {
      type: Object,
      required: true,
    },
    card: {
      type: Object,
      default: () => ({}),
    },
  },
};
</script>
