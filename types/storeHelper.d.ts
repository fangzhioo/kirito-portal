/** this file is auto generator , please don't edit it*/
import {VuexModule} from 'vuex-module-decorators';
import Global from '~/store/global'
import Home from '~/store/home'
import Trending from '~/store/trending'
import User from '~/store/user'

interface StoreHelper {
  
    global : {
      mutation: MutaionAction2Mutation<FunctionProperties<Global>>;
      action: AsyncFunctionProperties<Global>;
      getter: Pick<Global, ReadonlyKeys<Global>>;
      state: Omit<Global, (keyof VuexModule) | FunctionPropertyNames<Global> | ReadonlyKeys<Global>>;
    };
    

    home : {
      mutation: MutaionAction2Mutation<FunctionProperties<Home>>;
      action: AsyncFunctionProperties<Home>;
      getter: Pick<Home, ReadonlyKeys<Home>>;
      state: Omit<Home, (keyof VuexModule) | FunctionPropertyNames<Home> | ReadonlyKeys<Home>>;
    };
    

    trending : {
      mutation: MutaionAction2Mutation<FunctionProperties<Trending>>;
      action: AsyncFunctionProperties<Trending>;
      getter: Pick<Trending, ReadonlyKeys<Trending>>;
      state: Omit<Trending, (keyof VuexModule) | FunctionPropertyNames<Trending> | ReadonlyKeys<Trending>>;
    };
    

    user : {
      mutation: MutaionAction2Mutation<FunctionProperties<User>>;
      action: AsyncFunctionProperties<User>;
      getter: Pick<User, ReadonlyKeys<User>>;
      state: Omit<User, (keyof VuexModule) | FunctionPropertyNames<User> | ReadonlyKeys<User>>;
    };
    
}

declare module 'vue/types/vue' {
  interface Vue {
    $storeHelper: StoreHelper;
  }
}

declare module '@nuxt/vue-app/types/index' {
  interface Context {
    $storeHelper: StoreHelper;
  }
}
