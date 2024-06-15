const sumAll = function(num1, num2) {
    if (num1 < 0 || num2 < 0 || !Number.isInteger(num1) || !Number.isInteger(num2)) {
        return "ERROR";
    }

    const biggerNumber = (num2 > num1) ? num2 : num1;
    const smallerNumber = (num2 > num1) ? num1 : num2;

    let finalSum = 0;
    for (let i = smallerNumber; i <= biggerNumber; i++) {
        finalSum += i;
    }
    return finalSum;
};

// Do not edit below this line
module.exports = sumAll;
