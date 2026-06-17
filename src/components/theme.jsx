import "../css/theme.css"
import { useChatContext } from "../context/context"

function Theme(){

    const {theme} = useChatContext()

    const changetheme = (theme) => {

        // to target html use documentElement otherwise it will show extra black screen at light mode 
        document.documentElement.className = theme
    }

    return (

        <>
        
            {theme && (<div className="theme_theme"> 

                                <p> Choose theme </p>

                                <button onClick={() => changetheme("light")}> <span> Light mode </span> </button>
                                <button onClick={() => changetheme("dark")}> <span> Dark mode </span> </button>

                        </div>)}
        
        </>
    )
}

export default Theme