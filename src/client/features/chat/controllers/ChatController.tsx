import { makeAutoObservable } from "mobx";
import { Chat } from "../domain/chat";
import React, { ReactElement, ReactNode } from "react";

declare const window: unknown;

interface ChatControllerAPI {
  openChat: () => void;
}

class ChatController implements ChatControllerAPI {
  private readonly _chats: Chat[] = [];

  public constructor(data?: ControllerData) {
    if (data) {
      this._chats = data.chats;
    }

    makeAutoObservable(this);
  }

  public get chats(): Chat[] {
    // returns a copy to avoid private object changes
    return [...this._chats];
  }

  public openChat = () => {
    const chat = new Chat();

    this._chats.push(chat);
  };

  public closeChat = () => {};
}

const chatController = new ChatController();
const Context = React.createContext(chatController);

function initializeStore(initialData?: ControllerData) {
  if (typeof window === "undefined") new ChatController(initialData);

  return chatController;
}

export function ChatControllerProvider({
  children,
}: {
  children: ReactNode;
}): ReactElement {
  const store = initializeStore();
  return <Context.Provider value={store}>{children}</Context.Provider>;
}

export function useChatController() {
  return React.useContext(Context);
}

export const chatAPI: ChatControllerAPI = {
  openChat: chatController.openChat,
};

type ControllerData = { chats: Chat[] };
