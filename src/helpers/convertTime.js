const convertTime = (date) => {
  const time = new Date(date * 1000);
  let realTime = time.toLocaleTimeString();
  var splittedString = realTime.split(":");

  realTime = splittedString.slice(0).join(":");
  return realTime;
};
export default convertTime;
