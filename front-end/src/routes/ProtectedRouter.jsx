import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { authContext } from "../context/AuthContext";
const ProtectedRouter = ({ children, allowedRoles }) => {
  console.log("🚀 ~ ProtectedRouter ~ allowedRoles:", allowedRoles);
  const { token, role } = useContext(authContext);
  console.log("🚀 ~ ProtectedRouter ~ role:", role);
  const isAllowed = allowedRoles.includes(role);
  //console.log("🚀 ~ ProtectedRouter ~ isAllowed:", isAllowed);
  const accessibleRoute =
    token && isAllowed ? children : <Navigate to="/login" replace={true} />;
  return accessibleRoute;
};

export default ProtectedRouter;
