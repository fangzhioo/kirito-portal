import { Module, VuexModule, MutationAction } from 'vuex-module-decorators';
import { api } from '~/api';

type ActionParams<T> = {
  payload: T;
  callback?: Function;
};

@Module({ name: 'Video', stateFactory: true })
export default class Video extends VuexModule {
  videoDetail: defs.portal.VideoVO = {} as any;

  @MutationAction
  async fetchVideoDetail({ payload, callback }: ActionParams<defs.portal.video.getVideoById.Params>) {
    const res = await api.portal.video.getVideoById.request(payload);
    callback && callback(res);
    if (res && res.code === 200) {
      return {
        videoDetail: res.data,
      };
    }
    return {
      videoDetail: {},
    };
  }
}
