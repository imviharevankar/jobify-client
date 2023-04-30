export const getTimestampInSeconds = (): number => {
  return Math.floor(Date.now() / 1000);
};

export const displayDate = (inputDate: string) => {
  const date = new Date(inputDate);
  return new Intl.DateTimeFormat(
    "en-IN",
    {
      dateStyle: "medium",
      hour12: false,
    })
    .format(date);
};