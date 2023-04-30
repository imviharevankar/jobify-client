import SignUpForm from "../components/forms/SignUpForm";
import { useData } from "../context/DataContext";
import { getLocalStorage } from "../helper/storage";
import AuthLayout from "../layout/AuthLayout";
import { HOME } from "../routes/path";
import { StorageKeys } from "../util/storageKeys";
import OfficeBg1 from "../assets/OfficeBg1.jpg";

export const SignUp = () => {
  const { navigateToSpecificRoute } = useData();

  const authUser = getLocalStorage(StorageKeys.AUTH_USER);
  if (authUser) {
    navigateToSpecificRoute(HOME);
  };
  return (
    <AuthLayout
      src={OfficeBg1}
      child={<SignUpForm />}
    />
  )
}

export default SignUp;
