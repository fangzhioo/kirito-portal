import { Module, MutationAction, Mutation, Action, VuexModule } from 'vuex-module-decorators';
import { api } from '~/api';

type ActionParams<T> = {
  payload: T;
  callback?: Function;
};

@Module({ name: 'Trending', stateFactory: true })
export default class Home extends VuexModule {
  trendingList: defs.portal.ArticleVO[] = [];

  @Mutation
  setTrendingList(newList: defs.portal.ArticleVO[] = []) {
    this.trendingList = [...newList];
  }

  @Action({ commit: 'setTrendingList' })
  async fetchData(payload: defs.portal.article.getRecommendArticles.Params) {
    const res = await api.portal.article.getRecommendArticles.request(payload);
    if (res && res.code === 200) {
      return {
        trendingList: res.data,
      };
    }
    return [];
  }

  @MutationAction
  async fetchTrendingList({ payload, callback }: ActionParams<defs.portal.article.getRecommendArticles.Params>) {
    const res = await api.portal.article.getRecommendArticles.request(payload);
    callback && callback(res);
    if (res && res.code === 200) {
      return {
        trendingList: res.data,
      };
    }
    return {
      trendingList: [],
    };
  }
}
