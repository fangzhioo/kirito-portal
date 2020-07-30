import { Module, Mutation, MutationAction, VuexModule } from 'vuex-module-decorators';
import { api } from '~/api';

const notes = [
  {
    avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
    title: 'Brunch this weekend?',
    subtitle:
      "<span class='text--primary'>Ali Connors</span> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?",
  },
  {
    avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
    title: 'Summer BBQ <span class="grey--text text--lighten-1">4</span>',
    subtitle:
      "<span class='text--primary'>to Alex, Scott, Jennifer</span> &mdash; Wish I could come, but I'm out of town this weekend.",
  },
  {
    avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
    title: 'Oui oui',
    subtitle:
      "<span class='text--primary'>Sandra Adams</span> &mdash; Do you have Paris recommendations? Have you ever been?",
  },
  {
    avatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg',
    title: 'Birthday gift',
    subtitle:
      "<span class='text--primary'>Trevor Hansen</span> &mdash; Have any ideas about what we should get Heidi for her birthday?",
  },
  {
    avatar: 'https://cdn.vuetifyjs.com/images/lists/5.jpg',
    title: 'Recipe to try',
    subtitle:
      "<span class='text--primary'>Britta Holt</span> &mdash; We should eat this: Grate, Squash, Corn, and tomatillo Tacos.",
  },
];

@Module({ name: 'Global', stateFactory: true })
export default class User extends VuexModule {
  userInfo: defs.petstore.User & any = {
    email: 'kirito1234@gmail.com',
    lastName: 'Zhi',
    firstName: 'Fang',
    avatar: 'https://cdn.vuetifyjs.com/images/john.jpg',
    subscribers: '1.06M',
  };

  notifications: any[] = [...notes];

  globalToken: string =
    'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ7XCJuaWNrTmFtZVwiOlwi5qGQ5Lq6T19PXCIsXCJ1c2VyTmFtZVwiOlwia2lyaXRvXCIsXCJ1c2VySWRcIjoxLFwiZW1haWxcIjpcIktpcml0b0BnbWFpbC5jb21cIn0iLCJpc3MiOiJraXJpdG8iLCJleHAiOjE1OTY2MjM5NTF9.qqDEIKjrWsA0g_Ht_AONwMRyi5cMb_v-0MdpSI2Hnwk';

  public get subscribers(): string {
    return this.userInfo.subscribers;
  }

  public get token(): string {
    return this.globalToken;
  }

  get avatar() {
    return this.userInfo.avatar;
  }

  get email() {
    return this.userInfo.email;
  }

  get nickName() {
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
