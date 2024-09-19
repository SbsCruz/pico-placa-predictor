// function to check if the car is in a restrict day

const isRestrictedDay = (lastDigit, day, restrictedDays = []) => {

  if (day === 0 || day > 6) return;

  currentRestricted = restrictedDays[day]       // due to restrictedDays is an object with key values, we search the corresponding key with the day
  return currentRestricted.includes(lastDigit)  // then, it returns a boolean to know wheter or not the car is restricted

}

module.exports = { isRestrictedDay }