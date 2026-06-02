import "./assets/css/App.css"
import gptlogo from "./assets/chatgpt.svg"
import plus from "./assets/add-30.png"
import comment from "./assets/message.svg"
import home from "./assets/home.svg"
import book from "./assets/bookmark.svg"
import rocket from "./assets/rocket.svg"
// import send from "./assets/send.svg"
import pic from "./assets/user-icon.png"
import logo from "./assets/chatgptLogo.svg"
import send from "./assets/send.svg"

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

              <button className="setting"> <img src={home} alt="plys sign" /> <span> Home </span> </button>

              <button className="setting"> <img src={book} alt="plys sign" /> <span> Saved </span> </button>
              
              <button > <img src={rocket} alt="plys sign" /> <span> Upgtade to pro? </span> </button>

          </div>

        </div>
        
        <div className="main">

          <div className="content_box">

            <div className="box1">

                <div className="image">

                  <img src={pic} alt="profile.pic" />

                  <p> Write an article on laptop </p>

                </div>

              <div className="box2">

                <img src={logo} alt="chat gpt pic" />

                <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique amet esse veniam magni asperiores nemo illo rerum maxime dicta temporibus! Nisi similique, accusamus voluptate nostrum ipsam recusandae iure tempora asperiores repudiandae velit quasi cumque temporibus quo molestias inventore cupiditate labore amet unde assumenda? Necessitatibus quis accusantium dolores laudantium. Neque eius minus quibusdam aperiam saepe repellendus. Facere, esse? Debitis, a incidunt. Dicta, quo. Suscipit cupiditate quaerat dolore ratione nam, quos maxime delectus itaque optio soluta, fuga iusto hic provident natus error temporibus id saepe odit expedita rem dolorem eius perferendis minus eligendi. Quidem quis cupiditate repellat itaque quibusdam doloribus esse ullam!</p>

              </div>
            
            </div>

            <div className="send_message"> 
                
              <form action="" method="get">
  
               <textarea name="text" className="btn" placeholder="Type your message"></textarea> <button className="btn2" > <img src={send} alt="send mesage" /> </button>

              </form>
              
            </div>
            
          </div>

        </div>
  
      </div>
  
    </>
  
  );
}

export default App;