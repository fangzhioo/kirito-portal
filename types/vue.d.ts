import Vue from 'vue';
import { Store } from 'vuex';
import { apitype } from '../app/api';

declare module 'vue/types/vue' {
  interface Vue {
    $axios: Nuxt.AxiosInstance;
    $API: apitype;
    $store: Store<any>;
  }
}

declare module 'vue/types/options' {
  interface ComponentOptions<V extends Vue> {
    link?: any;
    // auth  false 表示不需要鉴权，默认全部鉴权
    auth?: boolean;
    // 页面顶部导航 > 最后要显示的页面路径， 默认不显示, 根据菜父子关系自动显示
    title?: string;
    store?: Store<any>;
  }
}
