import "./assets/css/App.css"
import gptlogo from "./assets/chatgpt.svg"

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