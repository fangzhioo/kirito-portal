import { Module, MutationAction, VuexModule } from 'vuex-module-decorators';
import { api } from '~/api';

type Status = 'sold' | 'pending';
@Module({ name: 'Home', stateFactory: true })
export default class Home extends VuexModule {
  recommendList: defs.petstore.Pet[] = [];
  currentStatus: Status = 'sold';

  foo = 'foo';

  @MutationAction
  async fetchRecommendList({ payload }: any) {
    const recommendList = await api.petstore.pet.findPetsByStatus.request(payload);
    return {
      recommendList,
    };
  }
}
