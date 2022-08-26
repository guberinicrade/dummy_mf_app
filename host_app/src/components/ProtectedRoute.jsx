import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children,isLoggedIn }) => {
  if (isLoggedIn) {
    // user is not authenticated
    return <Navigate to="/home" />;
  }
  return children;
};

export default ProtectedRoute;
