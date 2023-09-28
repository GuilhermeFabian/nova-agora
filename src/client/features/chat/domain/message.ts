import { makeAutoObservable } from "mobx";

export class ChatMessage {
  private text: string = "";

  public constructor(text: string) {
    this.text = text;

    makeAutoObservable(this);
  }
}
