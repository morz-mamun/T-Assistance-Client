import { Navigate } from "react-router-dom";
import useAuth from "../Hooks/useAuth";


const PrivateRoute = ({children}) => {
    const [user, loading] = useAuth() 
    if(user){
        return children
    }

    if(loading){
        return <progress className="progress w-56"></progress>
    }
    return <Navigate to={'/login'}></Navigate>
};

export default PrivateRoute;