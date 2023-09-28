import { makeAutoObservable } from "mobx";

export class AuthenticationController {
  public static get controller() {
    return new AuthenticationController();
  }

  public constructor() {
    makeAutoObservable(this);
  }
}
