// import readline so the user can interact with the app
const readline = require('readline');

// create the instance
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// function to handle the plate input
const handlePlate = () => {
  return new Promise((resolve, reject) => {
    rl.question('Por favor, ingrese el número de placa (ej. ABC-1234): ', (plate) => {
      const regex = /^[a-zA-Z]{3}-\d{4}$/;                              // format for the plate
      if (!regex.test(plate)) {
        return reject(new Error('Formato de placa incorrecto.'));
      }
      resolve(plate);
    });
  });
};

// function to handle the date input
const handleDate = () => {
  return new Promise((resolve, reject) => {
    rl.question('Ingrese la fecha (formato DD/MM/AAA): ', (date) => {
      const regex = /^\d{2}\/\d{2}\/\d{4}$/;                            // format for the date
      if (!regex.test(date)) {
        return reject(new Error('Formato de fecha incorrecto.'));
      }
      resolve(date);
    });
  });
};

// function to handle the time input
const handleTime = () => {
  return new Promise((resolve, reject) => {
    rl.question('Ingrese la hora (formato HH:MM, 24 horas): ', (time) => {
      const regex = /^([01]\d|2[0-3]):([0-5]\d)$/;                  // format for the time
      if (!regex.test(time)) {
        return reject(new Error('Formato de hora incorrecto.'));
      }
      resolve(time);
    });
  });
};


module.exports = { handlePlate, handleDate, handleTime }
