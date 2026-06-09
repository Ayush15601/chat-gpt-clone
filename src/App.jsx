import Home from "./page/home"
import { Chatprovider } from "./context/context"

function App() {

  return(

    <>
    
      <Chatprovider>
      
        <Home />
      
      </Chatprovider>
    
    </>

  )
}

export default App