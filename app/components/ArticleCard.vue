<template>
  <v-card class="card" tile flat router :to="`/article/${dataSource.articleId}`">
    <v-row no-gutters>
      <v-col class="mx-auto" cols="12" sm="8" md="5" lg="4">
        <v-responsive max-height="100%">
          <v-img class="align-center" :src="dataSource.cover"> </v-img>
        </v-responsive>
      </v-col>
      <v-col class="hidden-sm-and-down">
        <div class="ml-4">
          <v-card-title class="pl-2 pt-0 subtitle-1 font-weight-bold">
            {{ dataSource.title }}
          </v-card-title>

          <v-card-subtitle class="pl-2 pb-0">
            {{ dataSource.authorNickname }}
            <v-icon>mdi-circle-small</v-icon>
            {{ dataSource.views }} views
            <v-icon>mdi-circle-small</v-icon>
            {{ dataSource.gmtCreate }}
          </v-card-subtitle>
          <v-card-subtitle class="pl-2 pt-2"> {{ dataSource.content }}... </v-card-subtitle>
        </div>
      </v-col>
    </v-row>
  </v-card>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator';

@Component({ name: 'ArticleCard' })
export default class ArticleCard extends Vue {
  @Prop({
    type: Object,
    default: () => ({}),
    required: true,
  })
  dataSource!: defs.portal.ArticleVO;

  // props: {
  //   dataSource: {
  //     type: Object,
  //     default: () => ({
  //       title: '',
  //       author: 'kirito',
  //       link: '/article/1',
  //       views: '9.6k',
  //       release: '6 hours ago',
  //       thumb: 'https://cdn.vuetifyjs.com/images/cards/house.jpg',
  //       desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae exercitationem minus in asperiores.
  //           Dolorem dicta ea praesentium, repellendus ipsam harum optio, delectus facilis ratione quam quaerat a
  //           architecto hic reprehenderit.`,
  //     }),
  //   },
  // }
}
</script>

<style scoped>
.card {
  /* sadasd */
}
</style>
