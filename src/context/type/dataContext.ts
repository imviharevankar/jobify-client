export enum DataActionKeys {
  TEST = "test",
};

export type DataStateType = {
  test: string,
}

export type DataActionType = { type: DataActionKeys.TEST, payload: string }