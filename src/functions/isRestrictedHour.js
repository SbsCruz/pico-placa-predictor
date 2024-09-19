const isRestrictedHour = (time, restrictedHours) => {
  const timeToMinutes = (time) => {                         // function to transform the time to minutes in order to check the hour
    const [hours, minutes] = time.split(':').map(Number);   // split the hours an minutes and parse them into numbers
    return hours * 60 + minutes;                            // then it returns the total of minutes since 00:00
  };

  const timeInMinutes = timeToMinutes(time);                // we use the function defined above with the argument "time"

  return restrictedHours.some(({ start, end }) => {                                   // it checks wheter or not the time is between the restricted hours
    const startTimeInMinutes = timeToMinutes(start);                                  
    const endTimeInMinutes = timeToMinutes(end);
    return timeInMinutes >= startTimeInMinutes && timeInMinutes <= endTimeInMinutes; // returns a boolean
  });
};

module.exports = { isRestrictedHour }

