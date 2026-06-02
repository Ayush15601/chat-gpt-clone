import "./assets/css/App.css"
import gptlogo from "./assets/chatgpt.svg"
import plus from "./assets/add-30.png"
import comment from "./assets/message.svg"
import home from "./assets/home.svg"
import book from "./assets/bookmark.svg"
import rocket from "./assets/rocket.svg"
import pic from "./assets/user-icon.png"
import logo from "./assets/chatgptLogo.svg"
import send from "./assets/send.svg"

import Box from "./assets/components/response"

import {main} from "./assets/components/api"
import { useState } from "react"

function App() {

  const [text, settext] = useState("")
  const [res, setres] = useState("")
  const [err, seterr] = useState(null)
  const [loading, setloading] = useState(false)

   const load_response = async () => {

      try{
        setloading(true)
        const get_response = await main(text)
        setres(get_response)
      }

      catch(err){
        console.log(err)
        seterr("Failed to get response form server")
      }

      finally{
        setloading(false)
      }
    }

    const load = (e) => {

      e.preventDefault()
      load_response()
    }

    const clean = () => {
      setres("")
      settext("")
      seterr(null)
      setloading(false)
    }
 
  return (
  
  <>
  
      <div className="first_box">
  
        <div className="sidebar">

          <div className="sidebar_up">

            <div className="image"> 

              <img src={gptlogo} alt="cgat gpt image" className="a_image" />

              <span> Chat GPT </span>

            </div>

              <button className="new_chat" onClick={clean}> <img src={plus} alt="plys pic" /> <span> New chat </span> </button>

              <button className="new_chat2"> <img src={comment} alt="comment pic" /> <span> What is programming? </span> </button>

              <button className="new_chat2"> <img src={comment} alt="comment pic" /> <span> How to use API? </span> </button>

          </div>

          <div className="sidebar_down">

              <button className="setting"> <img src={home} alt="home pic" /> <span> Home </span> </button>

              <button className="setting"> <img src={book} alt="book pic" /> <span> Saved </span> </button>
              
              <button > <img src={rocket} alt="plys sign" /> <span> Upgtade to pro? </span> </button>

          </div>

        </div>
        
        <div className="main">

          <div className="content_box">

            {(loading || err || res.length > 0) && (<Box value={{image: pic, logopic: logo, error: err, load: loading, response: res, promt: text}}/>)}

            <div className="send_message"> 
                
              <form action="#" method="get" onSubmit={load}>
  
               <textarea name="text" className="btn" placeholder="Type your message" value={text} onChange={(e) => settext(e.target.value)}></textarea> <button className="btn2" > <img src={send} alt="send mesage" /> </button>

              </form>
              
            </div>
            
          </div>

        </div>
  
      </div>
  
    </>
  
  );
}

export default App;