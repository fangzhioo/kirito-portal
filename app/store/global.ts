import { Module, Mutation, MutationAction, VuexModule } from 'vuex-module-decorators';
import { api } from '~/api';
import { getToken, setToken } from '~/utils/cookie';
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
  userInfo: defs.portal.CommonUser & any = {
    email: 'kirito1234@gmail.com',
    nickName: 'Fang Zhi',
    avatar: 'https://cdn.vuetifyjs.com/images/john.jpg',
    subscribers: '1.06M',
    userId: 1,
    userName: 'kirito',
  };

  notifications: any[] = [...notes];

  globalToken: string = '';

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
    return this.userInfo.nickName;
  }

  public get subscribers(): string {
    return this.userInfo.subscribers || '0';
  }

  @Mutation
  clearUser() {
    this.userInfo = {};
  }

  @Mutation
  initToken() {
    this.globalToken = getToken();
  }

  // @MutationAction
  // async loadUser({ payload }: { payload: defs.petstore.user.getUserByName.Params }) {
  //   const userInfo = await api.petstore.user.getUserByName.request(payload);
  //   return {
  //     userInfo,
  //   };
  // }

  @MutationAction
  async currentUser() {
    const res = await api.portal.user.current.request();
    if (res && res.code === 200) {
      return {
        userInfo: res.data,
      };
    }
    return {
      userInfo: {},
      globalToken: '',
    };
  }

  @MutationAction
  async signIn({ payload, callback }: { payload: defs.portal.LoginUser; callback?: Function }) {
    const res = await api.portal.user.signIn.request(payload);
    if (callback) {
      callback(res);
    }
    if (res && res.code === 200) {
      setToken(res.data.token);
      return {
        userInfo: res.data.user,
        globalToken: res.data.token,
      };
    }
    return {
      userInfo: {},
      globalToken: '',
    };
  }
}
