<template>
  <div id="trending" class="pt-7 px-sm-10">
    <v-container fluid>
      <v-row>
        <v-col
          v-for="(item, i) in trendingList"
          :key="i"
          cols="8"
          sm="7"
          md="10"
          lg="10"
          class="mx-lg-0 mx-md-0 mx-sm-auto mx-auto"
        >
          <v-skeleton-loader class="mx-auto" type="list-item-avatar-three-line" :loading="loading" tile large>
            <ArticleCard :data-source="item" />
          </v-skeleton-loader>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';
import ArticleCard from '@/components/ArticleCard.vue';
@Component({
  name: 'Trending',
  components: { ArticleCard },
})
export default class HomePage extends Vue {
  loading: boolean = false;

  get trendingList() {
    return this.$store.state.trending.trendingList || [];
  }

  mounted() {
    this.$store
      .dispatch({
        type: 'trending/fetchTrendingList',
        payload: {},
      })
      .finally(() => {
        this.loading = false;
      });
    // setTimeout(() => {
    //   this.loading = false;
    // }, 3000);
  }
}
</script>

<style lang="scss">
.v-skeleton-loader__list-item-avatar-three-line {
  height: 250px;
  .v-skeleton-loader__paragraph.v-skeleton-loader__bone {
    margin-top: -125px;
    @media (max-width: 700px) {
      display: none;
      margin-top: inherit;
    }
  }
  .v-skeleton-loader__avatar {
    height: 200px !important;
    width: 300px !important;
  }
  .v-skeleton-loader__text {
    height: 20px;
  }
}
</style>
