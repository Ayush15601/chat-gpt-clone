import "../css/response.css"

function Box({value}) {

    return(
        <>
        <div className="box1">
        
          <div className="image">
        
            <p> {value.question} </p>
        
          </div>
        
          <div className="box2">
        
              <img src={value.logo} alt="chat gpt pic" />
        
              {value.err && <p>{value.err}</p>}
        
              {value.loading && <p> loading... </p>}
        
            <p>{value.response}</p>
        
          </div>
                    
        </div>
        
        </>
    )
}

export default Box