const palindromes = function (string) {
    string = string.toLowerCase().replace(/[^a-z0-9]/g, "");
    const splitString = string.split("");
	splitString.reverse();
	return splitString.join("") === string;
};

// Do not edit below this line
module.exports = palindromes;
