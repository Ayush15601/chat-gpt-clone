import Home from "./page/home"
import { ChatProvider } from "./context/context.jsx"

function App() {

  return(

    <>
      
      <ChatProvider>

        <Home />

      </ChatProvider>
    
    </>

  )
}

export default App