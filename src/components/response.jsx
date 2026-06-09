import { useState } from "react"
import "../css/response.css"
import ReactMarkdown from 'react-markdown'

function Box({value}) {

  const [clas, setclas] = useState(false)

  const clicked = () => {

    // toggle true and false
    setclas(!clas)
  }

    return(
        <>
        <div className="box1">
        
          <div className="image">
        
            <p> {value.question} </p>
        
          </div>
        
          <div className="box2">
        
              <p> 
              <ReactMarkdown>
                {value.response}
              </ReactMarkdown>
            </p>
        
          </div>

          <div className="like">

            <button onClick={clicked} className={`btn ${clas ? "like_active" : "" }`}> ♥ </button>
          
          </div>

                    
        </div>
        
        </>
    )
}

export default Box