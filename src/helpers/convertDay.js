const convertDay = (day) => {
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const d = new Date(day * 1000);

  const dayName = days[d.getDay()];
  return dayName;
};
export default convertDay;
