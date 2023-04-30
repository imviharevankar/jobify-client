import { ISelectOption } from "../../components/custom/CustomSelect"

export enum DataActionKeys {
  TEST = "test",
  JOB_LIST = "jobList",
  SKILLS = "skills",
  LOCATION = "location"
};

export type DataStateType = {
  test: string,
  jobList: any,
  skills: ISelectOption,
  location: ISelectOption,
}

export type DataActionType = { type: DataActionKeys.TEST, payload: string }
  | { type: DataActionKeys.SKILLS, payload: { label: string, value: string } }
  | { type: DataActionKeys.LOCATION, payload: string }
  | { type: DataActionKeys.JOB_LIST, payload: any }