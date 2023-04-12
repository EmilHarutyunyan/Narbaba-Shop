import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import TokenService from "../services/token.service";

const ProtectRouter = ({ access, redirect='/login', children }) => {
  const location = useLocation();
  
  const user = TokenService.getUser()
  if (!user) {
    return <Navigate to={redirect} state={{ from: location }} />;
  }
  return children;
};

export default ProtectRouter;
