import SignInForm from "../components/forms/SignInForm";
import { useData } from "../context/DataContext";
import { getLocalStorage } from "../helper/storage";
import AuthLayout from "../layout/AuthLayout";
import { HOME } from "../routes/path";
import OfficeBg1 from "../assets/OfficeBg1.jpg";
import { StorageKeys } from "../util/storageKeys";

const SignIn = () => {
  const { navigateToSpecificRoute } = useData();

  const authUser = getLocalStorage(StorageKeys.AUTH_USER);
  if (authUser) {
    navigateToSpecificRoute(HOME);
  };

  return (
    <AuthLayout
      src={OfficeBg1}
      child={<SignInForm />}
    />
  )

}

export default SignIn;
