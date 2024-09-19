// function for getting the last digit of the plate

const getPlateDigit = (plate) => {
  const lastDigit = +plate.slice(-1);                     // it takes the last digit
  if (isNaN(lastDigit)) {                                 // check if it's not a number
    return `Revise su placa, debe terminar en un número`
  } else {                                                // if it is, it returns the last digit
    return lastDigit;
  }
};

module.exports = { getPlateDigit }