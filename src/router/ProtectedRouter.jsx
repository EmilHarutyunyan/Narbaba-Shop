import React from "react";
import { Navigate, useLocation } from "react-router-dom";

const ProtectRouter = ({ access, redirect, children }) => {
console.log('access :', access);
  const location = useLocation();
  if (access?.length === 0 || access === undefined || access === false || access === null) {
    return <Navigate to={redirect} state={{ from: location.pathname }} />;
  }
  return children;
};

export default ProtectRouter;
