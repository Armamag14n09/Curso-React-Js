import { BrowserRouter } from "react-router-dom"
import { useLoginCotext } from "../Context/LoginContext"
import PrivateRoutes from "./PrivateRoutes"
import PubliRoutes from "./PubliRoutes"



const AppRouter = () => {

    const {user} = useLoginCotext()
    return(

        <BrowserRouter>
                {
                user.logged
                    ? <PrivateRoutes/> 
                    : <PubliRoutes/>
        }
        </BrowserRouter>

    )
}

export default AppRouter