import "../css/theme.css"
import { useChatContext } from "../context/context"

function Theme(){

    const {theme, setlocaltheme} = useChatContext()

    return (

        <>
        
            {theme && (<div className="theme_theme"> 

                            <p> Choose theme </p>

                            <button onClick={() => setlocaltheme("light")}> <span> Light mode </span> </button>
                            <button onClick={() => setlocaltheme("dark")}> <span> Dark mode </span> </button>

                        </div>)}
        
        </>
    )
}

export default Theme