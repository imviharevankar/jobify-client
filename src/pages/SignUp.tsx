import SignUpForm from "../components/forms/SignUpForm";
import { useData } from "../context/DataContext";
import { getLocalStorage } from "../helper/storage";
import AuthLayout from "../layout/AuthLayout";
import { HOME } from "../routes/path";
import { StorageKeys } from "../util/storageKeys";

export const SignUp = () => {
  const { navigateToSpecificRoute } = useData();

  const authUser = getLocalStorage(StorageKeys.AUTH_USER);
  if (authUser) {
    navigateToSpecificRoute(HOME);
  };
  return (
    <AuthLayout
      src='https://a.storyblok.com/f/189346/2048x800/63bbf306d7/charters-hero-compressed.png'
      child={<SignUpForm />}
    />
  )
}

export default SignUp;
