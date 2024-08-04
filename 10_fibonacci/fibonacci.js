const fibonacci = function(numPosition) {
    if (+numPosition === 0) {
        return 0;
    }
    else if (+numPosition < 0) {
        return "OOPS";
    }
    let [num1, num2, sum] = [1, 1, 1];
    for (let i = 2; i < +numPosition; i++) {
        sum = num1 + num2;
        num1 = num2;
        num2 = sum;
    }
    return sum;
};

// Do not edit below this line
module.exports = fibonacci;
