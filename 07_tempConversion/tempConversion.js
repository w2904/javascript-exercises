const convertToCelsius = function(degree) {
  celsius = (degree - 32) * 5 / 9;
  return Number.isInteger(celsius) ? (celsius) : +celsius.toFixed(1);
};

const convertToFahrenheit = function(degree) {
  fahrenheit = degree * 9 / 5 + 32;
  return Number.isInteger(fahrenheit) ? (fahrenheit) : +fahrenheit.toFixed(1);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
