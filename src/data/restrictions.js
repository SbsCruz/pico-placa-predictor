// define an object with key values, whith the last digists of the plates that are not allowed to drive in that day
const restrictedDays = {
  1: [1, 2], // Monday
  2: [3, 4], // Martes
  3: [5, 6], // Miércoles
  4: [7, 8], // Jueves
  5: [9, 0]  // Viernes
};

// define an array with objects, whose properties are "start" and "end", which indicates the schedule of Pico & Placa
const restrictedHours = [
  {
    start: '07:00',
    end: '09:30'
  },
  {
    start: '16:00',
    end: '19:30'
  }
];

module.exports = { restrictedDays, restrictedHours }