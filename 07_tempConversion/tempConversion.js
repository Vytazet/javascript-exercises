const convertToCelsius = function(tempInCelsius) {
  let tempInFahrenheit = 5/9*(tempInCelsius - 32);
  return +tempInFahrenheit.toFixed(1);
};

const convertToFahrenheit = function(tempInFahrenheit) {
  let tempInCelsius = tempInFahrenheit*9/5 + 32;
  return +tempInCelsius.toFixed(1);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
