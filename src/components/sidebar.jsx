import gptlogo from "../assets/chatgpt.svg"
import plus from "../assets/add-30.png"
import comment from "../assets/message.svg"
import home from "../assets/home.svg"
import book from "../assets/bookmark.svg"
import rocket from "../assets/rocket.svg"

import { useChatContext } from "../context/context.jsx"
import "../css/sidebar.css"

function Sidebar() {

      const {active, chat, load, clean, openHistory, del} = useChatContext()

    return(

        <>
        
            <div className="sidebar_up">

                <div className="sticky">

                    <div className="image"> 

                        <img src={gptlogo} alt="cgat gpt image" className="a_image" />

                    </div>

                    <button className="new_chat" onClick={clean}> <img src={plus} alt="plys pic" /> <span> New chat </span> </button>

                    <button className="new_chat2" id="1" onClick={load}> <img src={comment} alt="comment pic" /> <span> What is programming? </span> </button>

                    <button className="new_chat2" id="2" onClick={load}> <img src={comment} alt="comment pic" /> <span> How to use API? </span> </button>

                </div>
        
                <div className="history">

                    <p className={`para ${active ? "para_active" : ""}`}> Recents... </p>
            
                    {chat.map(item => ( <div className="btn_container"> <button className="btn3_1" key={item.id} onClick={() => openHistory(item.id)}> {item.question.slice(0, 25)}... </button> <button className="btn3" onClick={ () => {del(item.id)}}> ⋮ </button> </div>))}
            
                </div>
            
            </div>

            <div className="sidebar_down">

                <button className="setting"> <img src={home} alt="home pic" /> <span> Home </span> </button>

                <button className="setting"> <img src={book} alt="book pic" /> <span> Saved </span> </button>
            
                <button > <img src={rocket} alt="plys sign" /> <span> Upgrade to pro? </span> </button>

            </div>

        </>
    )
}

export default Sidebar