import { Module, MutationAction, VuexModule } from 'vuex-module-decorators';
import { api } from '~/api';

@Module({ name: 'Home', stateFactory: true })
export default class Home extends VuexModule {
  recommendList: any[] = [];

  // @MutationAction
  // async fetchRecommendList({ payload }: any) {
  //   const recommendList = await api.petstore.pet.findPetsByStatus.request(payload);
  //   return {
  //     recommendList,
  //   };
  // }
}
