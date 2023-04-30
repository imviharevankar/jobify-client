import _ from "lodash";

export const sortItem = (arr: any[], key: any, order: any) => {
  return _.orderBy(arr, key, order);
};
