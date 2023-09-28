import {
  ChatControllerProvider,
  useChatController,
} from "../controllers/ChatController";
import { Chat } from "../domain/chat";

export function Chats() {
  return (
    <ChatControllerProvider>
      <ChatContainer />
    </ChatControllerProvider>
  );
}

function ChatContainer() {
  const { chats } = useChatController();
  return (
    <div>
      <ChatList chats={chats} />
    </div>
  );
}

function ChatList({ chats }: { chats: Chat[] }) {
  const [chat, ...other] = chats;

  return (
    <>
      <ChatWindow chat={chat} />
      <ChatList chats={other} />
    </>
  );
}

function ChatWindow({ chat }: { chat: Chat }) {
  return !chat ? <></> : <div></div>;
}
