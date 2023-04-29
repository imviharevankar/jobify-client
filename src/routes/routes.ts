import { FC } from "react";
import Home from "../pages/Home";
import { HOME, PROFILE, SEARCH, SIGN_IN, SIGN_UP, JOB_DETAILS } from "./path";
import Search from "../pages/Search";
import Profile from "../pages/Profile";
import SignUp from "../pages/SignUp";
import SignIn from "../pages/SignIn";
import JobDetails from "../pages/JobDetails";

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