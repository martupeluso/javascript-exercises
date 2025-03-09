const leapYears = function(year) {
    // true if year is divisible by 4 but not by 100
    // OR if year is divisible by 400
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
};

// Do not edit below this line
module.exports = leapYears;
 