const add = function(a, b) {
  return a + b;
};

const subtract = function(a, b) {
  return a - b;
};

const sum = function(arr) {
  let numOfElements= arr.length;
  let sum = 0;

  for(let i = 0;i < numOfElements;i ++){
    sum += arr[i];
  }
  return sum;
};

const multiply = function(arr) {
  let numOfElements = arr.length;
  let product = 1;

  for(let i = 0;i < numOfElements;i ++){
    product *= arr[i];
  }

  return product;
};

const power = function(a, b) {
  return Math.pow(a, b);
};

const factorial = function(n) {
  let product = 1;

  for(let i = 1;i <= n;i ++){
    product *= i;
  }
  
  return product;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
