import { FC } from "react";
import Home from "../pages/Home";
import { HOME } from "./path";

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
];