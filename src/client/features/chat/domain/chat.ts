import { ChatMessage } from "./message";
import { User } from "./user";

export class Chat {
  private readonly user?: User;
  private readonly messages: ChatMessage[] = [];

  public constructor(userId: User['id']) {
  }

  public sendMessage = (text: string) => {
    const message = new ChatMessage(text);
  };
}
