const convertToCelsius = function(fahrenheit) {
  let result = ((fahrenheit - 32) * (5/9));
  return Number.isInteger(result) ? result : Number(result.toFixed(1));
};

const convertToFahrenheit = function(celsius) {
  let result = (celsius * (9/5) + 32);
  return Number.isInteger(result) ? result : Number(result.toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
