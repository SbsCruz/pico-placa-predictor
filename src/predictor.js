// imports files and functions
const { getWeekDay } = require('./functions/getWeekDay')
const { getPlateDigit } = require('./functions/getPlateDigit')
const { isRestrictedHour } = require('./functions/isRestrictedHour')
const { isRestrictedDay } = require('./functions/isRestrictedDay')
const { restrictedDays, restrictedHours } = require('./data/restrictions')

// this function will be the "soul" of the app
const isAllowed = (plate, date, time) => { // it takes a plate, a date and a time

  // it uses the imported functions in order to make the code cleaner
  const plateLastDigit = getPlateDigit(plate)                                     
  const dayNow = getWeekDay(date)
  const isRestricted_hour = isRestrictedHour(time, restrictedHours)
  const isRestricted_day = isRestrictedDay(plateLastDigit,dayNow, restrictedDays)

  return !(isRestricted_day && isRestricted_hour) // returns a boolean which says if the car is allowed to drive or not
}

module.exports = { isAllowed }