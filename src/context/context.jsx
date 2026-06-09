import { useContext, createContext, useState, useEffect } from "react";


const Chatcontext = createContext()

export const usechatcontext = () => useContext(Chatcontext)

export const Chatprovider = ({children}) => {

     const [chat, setchat] = useState([]);

    useEffect(() => {
        const getchat = localStorage.getItem("chat");
        if (getchat) setchat(JSON.parse(getchat));
    }, []);

    useEffect(() => {
     localStorage.setItem("chat", JSON.stringify(chat));
    }, [chat]);

    const value = {chat, setchat}

    return(

        <>

            <Chatcontext.Provider value={value}> {children} </Chatcontext.Provider>

        </>
    
    )
}