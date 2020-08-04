import { Module, VuexModule, MutationAction } from 'vuex-module-decorators';
import { api } from '~/api';

type ActionParams<T> = {
  payload: T;
  callback?: Function;
};

@Module({ name: 'Article', stateFactory: true })
export default class Article extends VuexModule {
  articleDetail: defs.portal.ArticleVO = {} as any;

  @MutationAction
  async fetchArticleDetail({ payload, callback }: ActionParams<defs.portal.article.getArticleById.Params>) {
    const res = await api.portal.article.getArticleById.request(payload);
    callback && callback(res);
    if (res && res.code === 200) {
      return {
        articleDetail: res.data,
      };
    }
    return {
      articleDetail: {},
    };
  }
}
