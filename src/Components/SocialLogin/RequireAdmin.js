import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import auth from "../Firebase/Firebase.init";
import useAdmin from "../Hook/useAdmin";

function RequireAdmin({ children }) {
    let location = useLocation();
    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user)

    if (!user || !admin) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }
    return children;
}

export default RequireAdmin;
