const { handleTime, handleDate, handlePlate } = require('./src/handlers/handleInput');
const { isAllowed } = require('./src/predictor');

const main = async () => {
  let plate, time, date;

  // Validar placa
  while (true) {
    try {
      plate = await handlePlate();
      console.clear(); // Limpiar la consola después de una entrada válida
      break; // Salir del bucle si la placa es válida
    } catch (error) {
      console.error(error.message);
    }
  }

  // Validar fecha
  while (true) {
    try {
      date = await handleDate();
      console.clear(); // Limpiar la consola después de una entrada válida
      break; // Salir del bucle si la fecha es válida
    } catch (error) {
      console.error(error.message);
    }
  }

  // Validar hora
  while (true) {
    try {
      time = await handleTime();
      console.clear(); // Limpiar la consola después de una entrada válida
      break; // Salir del bucle si la hora es válida
    } catch (error) {
      console.error(error.message);
    }
  }


  const result = isAllowed(plate, date, time);
  console.log(result ? "Si puede conducir" : "No puede conducir a esta hora. Lo sentimos.");
  process.exit();
};

main();
