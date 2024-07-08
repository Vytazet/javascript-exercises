const sumAll = function(a, b) {
    // The sum of the numbers a + (a+1) + (a + 2) + ... + b
    // is equal to (a + b)*(b - a + 1)/2
    if(!(Number.isInteger(a) && Number.isInteger(b))) return "ERROR";
    if(a < 0 || b < 0) return "ERROR";
    if(a > b) [a, b] = [b, a];

    return (a + b)*(b - a + 1)/2;
};

// Do not edit below this line
module.exports = sumAll;
