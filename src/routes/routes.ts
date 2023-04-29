import { FC } from "react";
import Home from "../pages/Home";
import { HOME, SEARCH } from "./path";
import Search from "../pages/Search";

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
];