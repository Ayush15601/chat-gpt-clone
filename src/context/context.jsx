/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext } from "react";
import { useHook } from "../hooks/hook";

const ChatContext = createContext();

export const useChatContext = () => useContext(ChatContext);

export function ChatProvider({ children }) {
    const value = useHook();

    return (
        <ChatContext.Provider value={value}>
            {children}
        </ChatContext.Provider>
    );
}