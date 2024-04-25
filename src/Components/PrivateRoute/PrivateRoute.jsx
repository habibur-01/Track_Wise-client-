import { Navigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth"
import {PropTypes} from "prop-types"
const PrivateRoute = ({children}) => {
    const {user, loading} =useAuth()


    if (loading){
        return (<div className="w-full h-screen flex justify-center items-center">
            <span className="loading loading-ball loading-lg"></span>
        </div>)
    }

    if(user){
        return children
    }
    return (
        <Navigate to="/login" state={{ from: location }} replace></Navigate>
    );
};
PrivateRoute.propTypes = {
    children: PropTypes.any
}
export default PrivateRoute;