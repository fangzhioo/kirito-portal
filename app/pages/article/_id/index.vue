<template>
  <div id="article">
    <v-container fluid>
      <v-row>
        <v-col cols="11" class="mx-auto">
          <v-row>
            <v-col cols="12" sm="12" md="8" lg="8">
              <ArticleSection :data-source="articleDetail" :loading="articleLoading" />
            </v-col>
            <v-col cols="12" sm="12" md="4" lg="4">
              <h4 class="mb-3 mt-3">TOC</h4>
              <ul class="ml-2">
                <li v-for="i in 10" :key="i">Lorem, ipsum dolor. {{ i }}</li>
              </ul>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" sm="12" md="8" lg="8">
              <v-skeleton-loader type="card-avatar, article, actions" :loading="commentLoading" tile large>
                <v-row class="justify-space-between">
                  <v-col>
                    <p class="mb-0">148 Comments</p>
                    <input ref="hello" type="text" />
                    <v-card class="transparent" flat>
                      <v-list-item three-line class="pl-0">
                        <v-list-item-avatar size="50"
                          ><v-img src="https://randomuser.me/api/portraits/men/1.jpg"></v-img
                        ></v-list-item-avatar>
                        <v-list-item-content class="align-self-auto">
                          <v-text-field
                            v-model="comment"
                            placeholder="Add a public comment..."
                            @click="showCommentBtns = true"
                          >
                          </v-text-field>
                          <div v-if="showCommentBtns" class="d-inline-block text-right">
                            <v-btn text @click="showCommentBtns = !showCommentBtns">Cancel</v-btn>
                            <v-btn class="blue darken-3 white--text" depressed tile :disabled="comment === ''"
                              >Comment</v-btn
                            >
                          </div>
                        </v-list-item-content>
                      </v-list-item>
                    </v-card>

                    <v-card v-for="i in 5" :key="i" class="transparent" flat>
                      <v-list-item three-line class="pl-0 mt-2">
                        <v-list-item-avatar size="50"
                          ><v-img src="https://randomuser.me/api/portraits/men/1.jpg"></v-img
                        ></v-list-item-avatar>
                        <v-list-item-content>
                          <v-list-item-title class="font-weight-medium caption mb-1"
                            >Tech Reagan <span class="font-weight-light grey--text"> 1 day ago</span></v-list-item-title
                          >
                          <v-list-item-subtitle class="black--text text--darken-4 caption"
                            >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore deleniti aspernatur
                            nostrum eius dignissimos repellendus. Fugiat, aspernatur deserunt iusto natus consectetur
                            voluptatem voluptate laboriosam pariatur qui animi repudiandae quae
                            dolorem.</v-list-item-subtitle
                          >
                          <div>
                            <v-btn text small :ripple="false" @click.stop="showReply(`${'reply' + i}`)">Reply</v-btn>
                          </div>
                          <div :ref="`${'reply' + i}`" class="d-none">
                            <v-list-item three-line class="pl-0">
                              <v-list-item-avatar class="mt-0" size="40"
                                ><v-img src="https://randomuser.me/api/portraits/men/1.jpg"></v-img
                              ></v-list-item-avatar>
                              <v-list-item-content class="align-self-auto mt-0 pt-0">
                                <v-form :ref="`form${i}`">
                                  <v-text-field
                                    :ref="`${'input' + i}`"
                                    class="pt-0 mt-0 body-2"
                                    placeholder="Add a public comment..."
                                    :value="repliesInput[`input${i}`]"
                                  >
                                  </v-text-field>
                                </v-form>
                                <div :ref="i + 'btns'" class="d-inline-block text-right">
                                  <v-btn text small @click="hideReply(i)">Cancel</v-btn>
                                  <v-btn class="blue darken-3 white--text" depressed tile small @click="addReply(i)"
                                    >Reply</v-btn
                                  >
                                </div>
                              </v-list-item-content>
                            </v-list-item>
                          </div>
                        </v-list-item-content>
                      </v-list-item>
                    </v-card>
                  </v-col>
                </v-row>
              </v-skeleton-loader>
            </v-col>

            <v-col cols="12" sm="12" md="4" lg="4">
              <hr class="grey--text" />
              <h4 class="mb-3 mt-3">Up next</h4>
              <div v-for="i in 5" :key="i" class="mb-5">
                <v-skeleton-loader
                  class="mx-auto"
                  type="list-item-avatar-three-line"
                  :loading="recommendLoading"
                  tile
                  large
                >
                  <v-card class="card" tile flat>
                    <v-row no-gutters>
                      <v-col class="mx-auto" cols="3" sm="3" md="5" lg="5">
                        <!-- <v-responsive max-height="100%"> -->
                        <v-img class="align-center" src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"> </v-img>
                        <!-- </v-responsive> -->
                      </v-col>
                      <v-col>
                        <div class="ml-2">
                          <v-card-title class="pl-2 pt-0 subtitle-1 font-weight-bold" style="line-height: 1;">
                            Top western road trips
                          </v-card-title>

                          <v-card-subtitle class="pl-2 pt-2 pb-0" style="line-height: 1;">
                            Tech Reagan<br />
                            9.6k views<v-icon>mdi-circle-small</v-icon>6 hours ago
                          </v-card-subtitle>
                        </div>
                      </v-col>
                    </v-row>
                  </v-card>
                </v-skeleton-loader>
              </div>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import ArticleSection from '@/components/ArticleSection';
export default {
  components: { ArticleSection },
  data: () => ({
    recommendLoading: true,
    articleLoading: true,
    commentLoading: true,
    truncate: true,
    comment: '',
    showCommentBtns: false,
    repliesInput: {},
  }),
  computed: {
    articleDetail() {
      return this.$store.state.article.articleDetail;
    },
  },
  mounted() {
    this.getArticle();
    setTimeout(() => {
      this.recommendLoading = false;
      this.commentLoading = false;
    }, 1400);
  },

  methods: {
    getArticle() {
      this.$store
        .dispatch({
          type: 'article/fetchArticleDetail',
          payload: { id: 4 },
        })
        .finally(() => {
          this.articleLoading = false;
        });
    },
    showReply(id) {
      this.$refs[id][0].classList.toggle('d-none');
    },
    hideReply(id) {
      this.$refs[`form${id}`][0].reset();
      this.$refs['reply' + id][0].classList.toggle('d-none');
    },
    addReply(id) {
      this.$refs[`form${id}`][0].reset();
      console.log(this.$refs[`input${id}`][0].$refs.input.value);
    },
  },
};
</script>

<style lang="scss">
#article {
  // 2
}
</style>
