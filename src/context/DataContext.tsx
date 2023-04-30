/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-function */
import { createContext, ReactNode, useContext, useReducer } from "react";
import { useNavigate } from "react-router";
import { DataActionKeys, DataActionType, DataStateType } from "./type/dataContext";
import { axiosGet } from "../service/https.service";
import { DROPDOWN_URL } from "../api/api";
import { HttpStatus } from "../api/httpsStatus";
import { FormikProps } from "formik";
import { ChangeEvent } from 'react';
import { JobFormSchema, SignUpSchema } from "../util/formSchema";

interface IDataContext {
  children: ReactNode,
};

const dataInitialState: DataStateType = {
  test: "test",
  jobList: [],
  skills: { label: '', value: '' },
  location: { label: '', value: '' },
};

const dataReducer = (state: DataStateType, action: DataActionType): DataStateType => {

  const { type, payload } = action;
  switch (type) {
    case DataActionKeys.TEST:
      return {
        ...state,
        test: payload,
      };
    case DataActionKeys.JOB_LIST:
      return {
        ...state,
        jobList: payload,
      }
    // case DataActionKeys.SKILLS:
    //   return {
    //     ...state,
    //     [action.payload]: action.payload,
    //   }
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
    navigateRouteWithQuery: (_path: string, _search: string) => { },
    fetchDropdownList: () => { },
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

  const navigateRouteWithQuery = (path: string, search: string): void => {
    navigate({
      pathname: path,
      search
    });
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

  const fetchDropdownList = async () => {
    const response = await axiosGet(DROPDOWN_URL)
    console.log(response);
    try {
      if (response?.status === HttpStatus.OK) {
        return response?.data
      }
    } catch (error) {
      console.log(error);
    }
  }



  const values = {
    dataState,
    dataDispatcher,
    navigateToSpecificRoute,
    // getAuthToken,
    handleFormikChange,
    navigateRouteWithState,
    navigateRouteWithQuery,
    fetchDropdownList,
  };

  return (
    <DataContext.Provider value={values}>
      {children}
    </DataContext.Provider>
  );
};

export default DataContextProvider;
