import {main} from "../api"
import { useState, useRef, useEffect } from "react"


export function useHook() {
    
    const [text, settext] = useState("")
    const [err, seterr] = useState(null)
    const [loading, setloading] = useState(false)
    const [Messages, setMessages] = useState([])
    const [active, setactive] = useState(false)
    const messagesEndRef = useRef(null)
    const [chat, setchat] = useState(() => {
        const saved = localStorage.getItem("chat");
        return saved ? JSON.parse(saved) : [];
    });
    const [theme, settheme] = useState(false)
    const [localtheme, setlocaltheme] = useState(() => {
        const saved = localStorage.getItem("localtheme");
        if (saved) document.documentElement.className = saved;
        return saved || "";
    })





    // auto scrollnp
    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({
        behavior: "smooth"
        })
    }, [Messages])




    useEffect(() => {
        localStorage.setItem("chat", JSON.stringify(chat));
    }, [chat]);

    useEffect(() => {
        if (localtheme) {
            localStorage.setItem("localtheme", localtheme);
            document.documentElement.className = localtheme;
        }
    }, [localtheme]);




    // main response load
    const load_response = async (text) => {

        try{

            // clear old error before second request
            seterr(null)
            setloading(true)

            const get_response = await main(text)

            const msg = {

            // Date.now() returns the current Unix timestamp in milliseconds, a big number like 1754920000123
            id: Date.now(),
            question: text,
            response: get_response
            }

            setMessages(prev => [...prev, msg]);

            // for chat history
            setchat(prev => [...prev, msg]);
        }

        catch(err){
            console.log(err)
            seterr("Failed to get response from server")
        }

        finally{
            setloading(false)
        }
        }




        const load = (e) => {

        // why its added check disable attribute of textarea
        // console.log("hi")

        const id = e.currentTarget.id

        e.preventDefault()
        
        // prevent multiple requet
        if(loading) return
        
        // to change class of input box on load
        
        if(id === "1"){
            setactive(true)
            load_response("what is programing?")
        }
        
        if(id === "2"){
            setactive(true)
            load_response("what is the use of api?")
        }
        
        if(id === "3" || id === "4"){
            
            // prevent emtpy message
            if(!text.trim()) return
            setactive(true)
            load_response(text)

            // to clean text after loading response
            settext("")
        }
        }




        const clean = () => {
        setMessages([])
        settext("")
        seterr(null)
        setloading(false)
        setactive(false)
        }




        // send data by pressing enter
        const enter = (e) => {
        if (e.key === "Enter" && !e.shiftKey) {
            
            e.preventDefault()
            
            // here load_response() will not used
            load(e)
        }
    };




        const openHistory = (id) => {
        const selected = chat.find(item => item.id === id);

            if(selected){
            setMessages([selected]);
            setactive(true);
            }
        }



        
        const del = (id) => {
            setMessages(prev => prev.filter(item => item.id !== id));
            
            const updated = chat.filter(item => item.id !== id);
            setchat(updated);

            if (updated.length === 0) {
            setactive(false);
            }
        }



        
        return {text, settext, err, seterr, loading, setloading, Messages, setMessages, active, setactive, chat, setchat, theme, settheme, localtheme, setlocaltheme, load, load_response, clean, enter, openHistory, del, messagesEndRef}
}