# 状态管理

nuxt 关于`store`的自动加载机制，请移动 nuxt 官方文档
https://zh.nuxtjs.org/guide/vuex-store/

本文档主要规范 `store` 的写法, 使用 `vuex-module-decorators` 定义状态树并减少样板代码

## 约定

1. store/index.ts 只允许有一个 action 即 `nuxtServerInit`， 其它如 `state`,`mutation`,`getters`一律不允许

正确的

```ts
// app/store/index.ts

export const actions = {
  // nuxtServerInit only call at server
  async nuxtServerInit({ dispatch }, ctx: Nuxt.Context) {
    // call other module's action to init state
    await dispatch('home/getPets');
  },
};
```

错误的

```ts
// app/store/index.ts

// index.ts 不允许导出 state
export state = () => {
  return {
    foo: 'foo',
    bar: 'bar'
  }
}

// index.ts 不允许导出 mutations
export mutations = {
  foo() {

  },
  bar() {

  }
}

export const actions = {
  nuxtServerInit({ dispatch }, ctx: Nuxt.Context) {
  },
  // index.ts 除了 nuxtServerInit，其它 action 一律不允许导出
  fooAction() {}
};
```

2. 状态必须统一拆分到不同的 `module` 下，使用 `vuex-module-decorators` 减少样板代码

```ts
// app/store/home.ts

import { Module, Mutation, MutationAction, Action, VuexModule } from 'vuex-module-decorators';
import { api } from '~/api';

@Module({ name: 'home', stateFactory: true })
export default class extends VuexModule {
  pets: defs.petstore.Pet[] = [];
  currentStatus: 'sold' | 'pending' = 'sold';

  @MutationAction
  async getPets(status: any) {
    let pets = await api.petstore.pet.findPetsByStatus.request({ status });
    return {
      pets,
      currentStatus: status,
    };
  }
}
```

```ts
// app/store/user.ts

import { Module, Mutation, VuexModule, MutationAction } from 'vuex-module-decorators';
import * as cookie from '~/utils/auth';
import { api } from '~/api';

interface IUserLoginParam {
  service: string;
  ticket: string;
  axios: Nuxt.AxiosInstance;
}

@Module({ name: 'user', stateFactory: true })
export default class extends VuexModule {
  // state
  info = { avatar: '', realName: 'test' };
  token: any = null;

  @MutationAction
  async logout() {
    await api.crmBackend2V.user.logoutAuth.request();
    cookie.removeToken();
    return {
      token: null,
      info: {},
    };
  }

  @MutationAction
  async getUserInfo(ctx: Nuxt.Context) {
    let userInfo = await api.crmBackend2V.user.getUserInfo.request();
    return {
      info: userInfo.data,
    };
  }

  @MutationAction
  async userLogin({ service, ticket, axios }: IUserLoginParam) {
    let res = await api.crmBackend2V.user.loginAuth.request({ service, ticket });
    const token = res.data;

    cookie.setToken(token);
    axios.setToken(token);

    let userInfo = await api.crmBackend2V.user.getUserInfo.request();

    return {
      info: userInfo.data,
      token,
    };
  }
}
```

## storeHelper.ts

用来导入 store, 下面的插件可以生成对应的声明文件 `storeHelper.d`

vscode 插件市场搜索 storehelper 安装插件，可以自动生成类型定义文件。https://github.com/gaoletian/storeHelper-vscode
