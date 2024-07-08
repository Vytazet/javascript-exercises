const leapYears = function(year) {
    let flag = false;
    if(year % 4 === 0)
        flag = true; 
    if(year % 100 === 0)
        flag = false;
    if(year % 400 === 0)
        flag = true;

    return flag;
};

// Do not edit below this line
module.exports = leapYears;
