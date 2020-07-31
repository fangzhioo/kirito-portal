import { Module, VuexModule } from 'vuex-module-decorators';

@Module({ name: 'Global', stateFactory: true })
export default class Global extends VuexModule {
  version: string = '1.0.0';
}
