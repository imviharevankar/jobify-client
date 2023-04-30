/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-function */
import { createContext, ReactNode, useContext, useReducer } from "react";
import { useNavigate } from "react-router";
import { DataActionKeys, DataActionType, DataStateType } from "./type/dataContext";
import { FormikProps } from "formik";
import { ChangeEvent } from 'react';
import { JobFormSchema, SignUpSchema } from "../util/formSchema";

interface IDataContext {
  children: ReactNode,
};

const dataInitialState: DataStateType = {
  test: "test"
};

const dataReducer = (state: DataStateType, action: DataActionType): DataStateType => {
  const { type, payload } = action;
  switch (type) {
    case DataActionKeys.TEST:
      return {
        ...state,
        test: payload,
      };
    default:
      return state;
  };
};

const DataContext = createContext(
  {
    dataState: dataInitialState,
    dataDispatcher: (_data: DataActionType) => { },
    navigateToSpecificRoute: (_path: string) => { },
    // getAuthToken: () => { },
    handleFormikChange: (
      _formik: FormikProps<SignUpSchema> | FormikProps<JobFormSchema>,
      _key: string,
      _value: ChangeEvent<HTMLInputElement> | string,
      _touched: boolean) => { },
    navigateRouteWithState: (_path: string, _state: object) => { },
  }
);

export const useData = () => useContext(DataContext);

const DataContextProvider = (props: IDataContext) => {
  const { children } = props;

  const navigate = useNavigate();

  const [dataState, dataDispatcher] = useReducer(dataReducer, dataInitialState);

  const navigateToSpecificRoute = (path: string): void => {
    navigate(path);
  };

  const navigateRouteWithState = (path: string, state: object): void => {
    navigate(path, {
      state,
    });
  };

  // const getAuthToken = async (): Promise<void> => {
  //   try {
  //     const response = await axiosGet(`${AUTH_TOKEN_URL}/vihar/viharsucks`, false);
  //     if (response?.status === HttpStatus.OK) {
  //       // saving token in session storage for api calls
  //       setSessionStorage(StorageKeys.TOKEN, response?.data?.token);
  //       // fetching dropdown values
  //       fetchDropdownList(dispatch);
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  const handleFormikChange = (
    formik: FormikProps<SignUpSchema> | FormikProps<JobFormSchema>,
    key: string,
    value: ChangeEvent<HTMLInputElement> | string,
    touched: boolean,
  ) => {
    formik.setFieldTouched(key, touched);
    formik.setFieldValue(key, value);
  }

  const values = {
    dataState,
    dataDispatcher,
    navigateToSpecificRoute,
    // getAuthToken,
    handleFormikChange,
    navigateRouteWithState,
  };

  return (
    <DataContext.Provider value={values}>
      {children}
    </DataContext.Provider>
  );
};

export default DataContextProvider;
