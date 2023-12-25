import {createRoot} from "react-dom/client"
import Header from "./src/components/Header"
const App = () => {
    return (
        <div>
            
            {Header()}
        </div>
    )
}


const root = createRoot(document.getElementById("root"))
root.render(<App/>)