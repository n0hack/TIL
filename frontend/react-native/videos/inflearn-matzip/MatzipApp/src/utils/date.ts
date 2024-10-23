export const getDateWithSeperator = (dateString: Date | string, seperator = '') => {
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  return [String(year).padStart(2, '0'), String(month).padStart(2, '0'), String(day).padStart(2, '0')].join(seperator);
};
