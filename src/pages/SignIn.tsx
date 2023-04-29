import SignInForm from "../components/forms/SignInForm";
import AuthLayout from "../layout/AuthLayout";

const SignIn = () => {
  return (
    <AuthLayout
      src='https://a.storyblok.com/f/189346/2048x800/63bbf306d7/charters-hero-compressed.png'
      child={<SignInForm />}
    />
  )
}

export default SignIn;
