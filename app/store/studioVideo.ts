import { Module, MutationAction, VuexModule } from 'vuex-module-decorators';
import { api } from '~/api';

type ActionParams<T> = {
  payload: T;
  callback?: Function;
};

@Module({ name: 'StudioVideo', stateFactory: true })
export default class StudioVideo extends VuexModule {
  videoList: defs.portal.VideoVO[] = [];

  @MutationAction
  async submitPublishVideo({ payload, callback }: ActionParams<defs.portal.VideoVO>) {
    const res = await api.portal.video.publishVideo.request(payload);
    callback && callback(res);
    return {};
  }
}
