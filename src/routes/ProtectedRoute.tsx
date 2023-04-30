import { FC } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { SIGN_IN } from "./path";
import { getLocalStorage } from "../helper/storage";
import { StorageKeys } from "../util/storageKeys";

const ProtectedRoute: FC = () => {
  const authUser = getLocalStorage(StorageKeys.AUTH_USER);
  return (
    <>
      {
        authUser ? <Outlet /> : <Navigate to={SIGN_IN} />
      }
    </>
  )
}

export default ProtectedRoute;
