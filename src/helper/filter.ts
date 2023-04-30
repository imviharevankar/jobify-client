
export const filterData = (arr: any[], filterBody: any) => {
  const filterDataArr = [];
  if (!filterBody.length) {
    return arr;
  }
  for (let i = 0; i < arr.length; i += 1) {
    if (filterBody.includes(arr?.[i]?.category) && filterBody.length) {
      filterDataArr.push(arr?.[i]);
    }
  }
  return filterDataArr;
}