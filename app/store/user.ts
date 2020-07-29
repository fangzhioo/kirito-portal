import { Module, Mutation, MutationAction, VuexModule } from 'vuex-module-decorators';
import { api } from '~/api';

@Module({ name: 'User', stateFactory: true })
export default class User extends VuexModule {
  userInfo: defs.petstore.User = {
    email: '',
    lastName: 'gao',
    firstName: 'letian',
  } as defs.petstore.User;

  get email() {
    return this.userInfo.email;
  }

  get fullName() {
    return this.userInfo.firstName + ' ' + this.userInfo.lastName;
  }

  @Mutation
  clearUser() {
    this.userInfo = {} as defs.petstore.User;
  }

  @MutationAction
  async loadUser({ payload }: { payload: defs.petstore.user.getUserByName.Params }) {
    const userInfo = await api.petstore.user.getUserByName.request(payload);
    return {
      userInfo,
    };
  }
}
