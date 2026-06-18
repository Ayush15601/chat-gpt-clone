
import "../css/home.css"
import logo from "../assets/chatgptLogo.svg"
import send from "../assets/send.svg"

import Box from "../components/response"
import Sidebar from "../components/sidebar"
import { useChatContext } from "../context/context"

function Home() {
  
  const {text, settext, settheme, err, loading, Messages, active, load, enter, messagesEndRef} = useChatContext()
 
  return (
  
  <>

    <Sidebar />

    <div className="main" onClick={() => settheme(false)}>

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
  
    </>
  
  );
}

export default Home;