// imports handlers and predictor
const { handleTime, handleDate, handlePlate } = require('./src/handlers/handleInput');
const { isAllowed } = require('./src/predictor');

const main = async () => {
  let plate, time, date;

  // Validates plate
  while (true) {
    try {
      plate = await handlePlate();
      console.clear();              // clears console so it looks cleaner
      break;                        // gets out of the while loop once the user enter the plate
    } catch (error) {
      console.error(error.message);
    }
  }

  // Validates date
  while (true) {
    try {
      date = await handleDate();
      console.clear();
      break;
    } catch (error) {
      console.error(error.message);
    }
  }

  // Validates time
  while (true) {
    try {
      time = await handleTime();
      console.clear();
      break;
    } catch (error) {
      console.error(error.message);
    }
  }

  // shows the user wheter he is able to drive or not
  const result = isAllowed(plate, date, time);
  console.log(result ? "Si puede conducir, hágalo con cuidado." : "No puede conducir a esta hora. Lo sentimos.");
  process.exit();
};

main();
