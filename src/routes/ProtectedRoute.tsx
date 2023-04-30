import { FC } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { SIGN_IN } from "./path";

const ProtectedRoute: FC = () => {
  const authUser = true;
  return (
    <>
      {
        authUser ? <Outlet /> : <Navigate to={SIGN_IN} />
      }
    </>
  )
}

export default ProtectedRoute;
