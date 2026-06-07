import "./assets/css/App.css"
import gptlogo from "./assets/chatgpt.svg"
import plus from "./assets/add-30.png"
import comment from "./assets/message.svg"
import home from "./assets/home.svg"
import book from "./assets/bookmark.svg"
import rocket from "./assets/rocket.svg"
import logo from "./assets/chatgptLogo.svg"
import send from "./assets/send.svg"

import Box from "./assets/components/response"

import {main} from "./assets/components/api"
import { useState, useRef, useEffect } from "react"

function App() {
  
  const [text, settext] = useState("")
  const [err, seterr] = useState(null)
  const [loading, setloading] = useState(false)
  const [Messages, setMessages] = useState([])
  const [active, setactive] = useState(false)
  const messagesEndRef = useRef(null)

  // auto scroll
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth"
    })
  }, [Messages])

   const load_response = async (text) => {

      try{

        // clear old error before second request
        seterr(null)
        setloading(true)

        const get_response = await main(text)

        setMessages(prev => [
          ...prev,
        {

          // Date.now() returns the current Unix timestamp in milliseconds, a big number like 1754920000123
          id: Date.now(),
          question: text,
          response: get_response
        }
            ]);
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
 
  return (
  
  <>
  
      <div className="first_box">
  
        <div className="sidebar">

          <div className="sidebar_up">

            <div className="image"> 

              <img src={gptlogo} alt="cgat gpt image" className="a_image" />

            </div>

              <button className="new_chat" onClick={clean}> <img src={plus} alt="plys pic" /> <span> New chat </span> </button>

              <button className="new_chat2" id="1" onClick={load}> <img src={comment} alt="comment pic" /> <span> What is programming? </span> </button>

              <button className="new_chat2" id="2" onClick={load}> <img src={comment} alt="comment pic" /> <span> How to use API? </span> </button>

          </div>

          <div className="sidebar_down">

              <button className="setting"> <img src={home} alt="home pic" /> <span> Home </span> </button>

              <button className="setting"> <img src={book} alt="book pic" /> <span> Saved </span> </button>
              
              <button > <img src={rocket} alt="plys sign" /> <span> Upgrade to pro? </span> </button>

          </div>

        </div>
        
        <div className="main">

          <div className="content_box">

            {(Messages.map( (item) => (<Box value={{logo: logo, err: err, loading: loading, response: item.response, question: item.question}} key={item.id}/>)))}
            
            {err && <p className="error"> {err} </p>}

            {/* auto scroll feature */}
            <div ref={messagesEndRef}></div>
            
            {loading && <p className="loading"> loading... </p>}

            <div className={`send_message ${active ? 'send_message_active' : ''}`}> 
                
              <form action="#" method="get" id="3" onSubmit={load}>
  
                {/* ckheck disabled attribute in button */}
                <textarea name="text" className={`btn ${active ? "a" : ""}`} placeholder="Type your message" value={text} onChange={(e) => settext(e.target.value)} id="4" onKeyDown={enter}></textarea> <button className={`btn2 ${active ? "a2" : ""}`} disabled={!text.trim() || loading}> <img src={send} alt="send mesage" /> </button>

              </form>
              
            </div>

          </div>

        </div>
  
      </div>
  
    </>
  
  );
}

export default App;