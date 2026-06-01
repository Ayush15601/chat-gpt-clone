import "./assets/css/App.css"
import gptlogo from "./assets/chatgpt.svg"
import plus from "./assets/add-30.png"
import comment from "./assets/message.svg"

function App() {

  return (
  
  <>
  
      <div className="first_box">
  
        <div className="sidebar">

          <div className="sidebar_up">

            <div className="image"> 

              <img src={gptlogo} alt="cgat gpt image" className="a_image" />

              <span> Chat GPT </span>

            </div>

              <button className="new_chat"> <img src={plus} alt="plys sign" /> <span> New chat </span> </button>

              <button className="new_chat2"> <img src={comment} alt="plys sign" /> <span> What is programming? </span> </button>

              <button className="new_chat2"> <img src={comment} alt="plys sign" /> <span> How to use API? </span> </button>

          </div>

          <div className="sidebar_down">

          </div>

        </div>
        
        <div className="main">


        </div>
  
      </div>
  
    </>
  
  );
}

export default App;