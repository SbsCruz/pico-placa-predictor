// function to check if the car is in a restrict day

const isRestrictedDay = (lastDigit, day, restrictedDays = []) => {

  currentRestricted = restrictedDays[day]       // due to restrictedDays is an object with key values, we search the corresponding key with the day
  return currentRestricted.includes(lastDigit)  // then, it returns a boolean to know wheter or not the car is restricted

}

module.exports = { isRestrictedDay }