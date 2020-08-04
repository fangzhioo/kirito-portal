import { Module, MutationAction, VuexModule } from 'vuex-module-decorators';
import { api } from '~/api';

type ActionParams<T> = {
  payload: T;
  callback?: Function;
};

@Module({ name: 'Home', stateFactory: true })
export default class Home extends VuexModule {
  recommendList: defs.portal.ArticleVO[] = [];

  @MutationAction
  async fetchRecommendList({ payload, callback }: ActionParams<defs.portal.article.getRecommendArticles.Params>) {
    const res = await api.portal.article.getRecommendArticles.request(payload);
    callback && callback(res);
    if (res && res.code === 200) {
      return {
        recommendList: res.data,
      };
    }
    return {
      recommendList: [],
    };
  }
}
