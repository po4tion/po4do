export const getTodayDate = () => {
  const date = new Date();

  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  const todayDate = `${year}-${month}-${day}`;

  return todayDate;
};
