import { createContext, useContext } from "react";
import { usehook } from "../hooks/hook";

const ChatContext = createContext();

export const useChatContext = () => useContext(ChatContext);

export function ChatProvider({ children }) {
    const value = usehook();

    return (
        <ChatContext.Provider value={value}>
            {children}
        </ChatContext.Provider>
    );
}