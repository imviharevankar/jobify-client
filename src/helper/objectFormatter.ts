export const getSelectOptions = (arr: any[], key: string) => {
  return arr?.find((item: any) => item?.dropdown === key)?.values?.map((item: string) => {
    return {
      label: item,
      value: item,
    }
  });
};
