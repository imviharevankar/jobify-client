import { FC, lazy } from "react";
import { HOME, PROFILE, SEARCH, SIGN_IN, SIGN_UP, JOB_DETAILS } from "./path";

const Home = lazy(() => import("../pages/Home"));
const Search = lazy(() => import("../pages/SignUp"));
const Profile = lazy(() => import("../pages/Profile"));
const SignUp = lazy(() => import("../pages/SignUp"));
const SignIn = lazy(() => import("../pages/SignIn"));
const JobDetails = lazy(() => import("../pages/JobDetails"));

export interface IRoutes {
  element: FC,
  path: string,
  isPrivate: boolean,
}

const routeObjectGenerator = (element: FC, path: string, isPrivate: boolean): IRoutes => {
  return {
    element,
    isPrivate,
    path,
  }
};

export const routes = [
  // HOME
  routeObjectGenerator(Home, HOME, false),
  routeObjectGenerator(Search, SEARCH, false),
  routeObjectGenerator(Profile, PROFILE, true),
  routeObjectGenerator(SignUp, SIGN_UP, false),
  routeObjectGenerator(SignIn, SIGN_IN, false),
  routeObjectGenerator(JobDetails, JOB_DETAILS, false),
];