export const convertToTwoDigit = (num) => {
  return num > 9 ? num : "0" + num;
};

export const convertToHHMMSS = (num) => {
  const hours = convertToTwoDigit(Math.floor(num / 3600));
  const minutes = convertToTwoDigit(Math.floor(Math.floor((num % 3600) / 60)));
  const seconds = convertToTwoDigit(Math.floor(Math.floor((num % 3600) % 60)));

  return { hours, minutes, seconds };
};
