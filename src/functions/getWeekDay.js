// function for getting the day of the week, 0 = monday, 6 = saturday
const getWeekDay = (date) => {
  const inputDate = date.split("/")                        // first it splits the date and saves the year, month and day
  const day = +inputDate[0]                                // this variables will be used to create a Date object
  const month = +inputDate[1] - 1
  const year = +inputDate[2]
  const currentDay = new Date(year, month, day).getDay(); // it creates a Date object from the date that was split in order to get the actual day of the week

  return currentDay;
};
module.exports = { getWeekDay };
