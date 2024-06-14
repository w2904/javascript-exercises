const reverseString = function(string) {
    let stringBackwards = "";
    for (let i = 1; i <= string.length; i++) {
        stringBackwards += string.charAt(string.length - i)
    }
    return stringBackwards;
};

// Do not edit below this line
module.exports = reverseString;
