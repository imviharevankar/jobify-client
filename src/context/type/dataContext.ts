import { ISelectOption } from "../../components/custom/CustomSelect"

export enum DataActionKeys {
  TEST = "test",
  JOB_LIST = "jobList",
  SKILLS = "skills",
  LOCATION = "location",
  CATEGORIES = "categories",
  FILTER_DATA_ADD = 'filterDataAdd',
  FILTER_DATA_REMOVE = 'filterDataRemove',
};

export type DataStateType = {
  test: string,
  jobList: any,
  skills: ISelectOption[],
  location: ISelectOption[],
  categories: ISelectOption[],
  filterKey: string[],
}

export type DataActionType = { type: DataActionKeys.TEST, payload: string }
  | { type: DataActionKeys.SKILLS, payload: { label: string, value: string }[] }
  | { type: DataActionKeys.LOCATION, payload: { label: string, value: string }[] }
  | { type: DataActionKeys.CATEGORIES, payload: { label: string, value: string }[] }
  | { type: DataActionKeys.JOB_LIST, payload: any }
  | { type: DataActionKeys.FILTER_DATA_ADD, payload: any }
  | { type: DataActionKeys.FILTER_DATA_REMOVE, payload: any }