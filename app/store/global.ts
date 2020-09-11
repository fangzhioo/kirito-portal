import { Module, VuexModule, Mutation } from 'vuex-module-decorators';

@Module({ name: 'Global', stateFactory: true })
export default class Global extends VuexModule {
  version: string = '1.0.0';

  // navbar
  drawer: boolean = false;

  public get collapse(): boolean {
    return this.drawer;
  }

  @Mutation
  changeGlobalCollapse(newValue: boolean) {
    this.drawer = !!newValue;
  }
}
