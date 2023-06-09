import { ISelectOption } from "../../components/custom/CustomSelect"

export enum DataActionKeys {
  TEST = "test",
  JOB_LIST = "jobList",
  SKILLS = "skills",
  LOCATION = "location",
  CATEGORIES = "categories",
  FILTER_DATA_ADD = 'filterDataAdd',
  FILTER_DATA_REMOVE = 'filterDataRemove',
  MESSAGE_MODAL = "messageModal",
  MESSAGE = 'message',
  API_STATUS = 'apiStatus',
};

export type DataStateType = {
  test: string,
  jobList: any,
  skills: ISelectOption[],
  location: ISelectOption[],
  categories: ISelectOption[],
  filterKey: string[],
  messageModal: boolean,
  message: string,
  apiStatus: string,
}

export type DataActionType = { type: DataActionKeys.TEST, payload: string }
  | { type: DataActionKeys.SKILLS, payload: { label: string, value: string }[] }
  | { type: DataActionKeys.LOCATION, payload: { label: string, value: string }[] }
  | { type: DataActionKeys.CATEGORIES, payload: { label: string, value: string }[] }
  | { type: DataActionKeys.JOB_LIST, payload: any }
  | { type: DataActionKeys.FILTER_DATA_ADD, payload: any }
  | { type: DataActionKeys.FILTER_DATA_REMOVE, payload: any }
  | { type: DataActionKeys.MESSAGE_MODAL, payload: boolean }
  | { type: DataActionKeys.MESSAGE, payload: string }
  | { type: DataActionKeys.API_STATUS, payload: string }

