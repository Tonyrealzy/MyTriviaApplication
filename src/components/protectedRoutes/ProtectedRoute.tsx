import React from "react";
import { useSelector } from "react-redux";
import { logger } from "../../services/logger";
import { Navigate, Outlet } from "react-router-dom";

interface ProtectedRouteProps {
  redirectPath?: string;
}
const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  redirectPath = "/",
}) => {
  const { apiCalled } = useSelector((state: any) => state.questions);
  logger("My API-called state: ", apiCalled);

  if (!apiCalled) {
    return <Navigate to={redirectPath} replace />;
  }
  return <Outlet />;
};

export default ProtectedRoute;
