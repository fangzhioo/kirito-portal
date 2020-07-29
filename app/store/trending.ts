import { Module, MutationAction, Mutation, Action, VuexModule } from 'vuex-module-decorators';
import { api } from '~/api';

@Module({ name: 'Trending', stateFactory: true })
export default class Home extends VuexModule {
  trendingList: defs.blog.BlogArticleVO[] = [];

  @Mutation
  setTrendingList(newList: defs.blog.BlogArticleVO[] = []) {
    this.trendingList = [...newList];
  }

  @Action({ commit: 'setTrendingList' })
  async fetchData() {
    await api.petstore.pet.getPetById.request({ petId: 1740 });
    return [];
  }

  @MutationAction
  async fetchTrendingList({ payload }: any) {
    const res = await api.blog.blogArticle.listArticleByQuery.request(payload);
    return {
      trendingList: res.data || [],
    };
  }
}
