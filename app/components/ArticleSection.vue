<template>
  <v-skeleton-loader type="card-avatar, article, actions" :loading="loading" tile large>
    <div v-if="isNull" class="mb-10">
      No find article
    </div>
    <template v-else>
      <v-card flat tile class="card mb-10">
        <v-card-title class="pl-0 pb-0">{{ dataSource.title }}</v-card-title>
        <div class="d-flex flex-wrap justify-space-between">
          <v-card-subtitle class="pl-0 pt-0 pb-0 subtitle-1" style="line-height: 2.4em;">
            {{ dataSource.views }} views<v-icon>mdi-circle-small</v-icon>{{ dataSource.gmtCreate }}
          </v-card-subtitle>
        </div>
      </v-card>
      <v-card flat tile class="mb-10">
        <section v-html="articleContent"></section>
      </v-card>
      <v-card flat tile class="card pt-10">
        <div class="action-btns d-flex flex-wrap justify-space-between">
          <v-card-subtitle class="pl-0 pt-0 pb-0 subtitle-1" style="line-height: 2.4em;">
            {{ dataSource.views }} views<v-icon>mdi-circle-small</v-icon>{{ dataSource.gmtCreate }}
          </v-card-subtitle>
          <v-card-actions class="pt-0 pl-0 grey--text">
            <v-btn text><v-icon class="pr-2">mdi-thumb-up</v-icon> 1.5k</v-btn>
            <v-btn text><v-icon class="pr-2">mdi-thumb-down</v-icon> 1.5k</v-btn>
            <v-btn text><v-icon>mdi-share</v-icon></v-btn>
            <v-btn text><v-icon>mdi-playlist-plus</v-icon></v-btn>
          </v-card-actions>
        </div>
      </v-card>

      <v-row>
        <v-col xl="12" sm="6" md="5" lg="5">
          <v-card class="transparent" flat>
            <v-list-item three-line>
              <v-list-item-avatar size="50"><v-img :src="dataSource.authorAvatar" alt=""></v-img></v-list-item-avatar>
              <v-list-item-content class="align-self-auto">
                <v-list-item-title class="font-weight-medium mb-1">{{ dataSource.authorNickname }}</v-list-item-title>
                <v-list-item-subtitle>152 subscribers </v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-card>
        </v-col>
        <v-col xl="12" sm="6" md="4" lg="4">
          <div class="d-flex justify-end align-center">
            <v-btn class="red white--text mt-6" tile large depressed>Subscribed</v-btn>
            <v-btn icon class="ml-5 mt-6"><v-icon>mdi-bell</v-icon></v-btn>
          </div>
        </v-col>
        <v-col class="pl-11" offset="1" cols="11" md="11">
          <p>
            {{ truncateText(dataSource.subtitle, 150) }}
          </p>
          <v-btn text class="remove-hover-bg" @click="show">{{ `${truncate ? 'Show More' : 'Show Less'}` }}</v-btn>
        </v-col>
      </v-row>
    </template>
  </v-skeleton-loader>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator';
import { isEmpty } from 'lodash';
@Component
export default class name extends Vue {
  truncate: boolean = true;
  @Prop([Boolean])
  loading?: boolean;

  @Prop({
    type: Object,
    default: () => ({}),
    required: true,
  })
  dataSource!: defs.portal.ArticleVO;

  get isNull() {
    return isEmpty(this.dataSource);
  }

  get articleContent() {
    return this.dataSource.content;
  }

  show() {
    this.truncate = !this.truncate;
  }

  truncateText(string = '', num: number) {
    if (!string) {
      return '暂无描述！';
    }
    if (this.truncate && string.length > num) {
      return string.slice(0, num);
    }
    return string;
  }
}
</script>

<style lang="scss">
.action-btns {
  border-bottom: 1px solid #e0d8d8;
  button {
    color: #7f7f7f;
  }
}
button.v-btn.remove-hover-bg {
  background-color: initial !important;
  &:hover {
    background-color: #f9f9f9;
  }
}
</style>
