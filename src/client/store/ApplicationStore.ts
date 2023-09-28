export class ApplicationStore {
  private static instance?: ApplicationStore = undefined;

  private constructor() {}

  public static get store(): ApplicationStore {
    if (!ApplicationStore.instance) {
      ApplicationStore.instance = new ApplicationStore();
    }

    return ApplicationStore.instance;
  }

  public getController() {}
}
