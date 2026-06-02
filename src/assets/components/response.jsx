import "../css/response.css"

function Box({value}) {

    return(
        <>
        <div className="box1">
        
                        <div className="image">
        
                          <img src={value.image} alt="profile.pic" />
        
                          <p> {value.promt} </p>
        
                        </div>
        
                      <div className="box2">
        
                        <img src={value.logopic} alt="chat gpt pic" />
        
                        {value.error && <p>{value.error}</p>}
        
                        {value.load && <p> loading... </p>}
        
                        <p>{value.response}</p>
        
                      </div>
                    
            </div>
        
        </>
    )
}

export default Box