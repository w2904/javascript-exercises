const findTheOldest = function(arr) {
    const sortedArray = arr.sort((a, b) => {
        if (a.yearOfDeath === undefined) {
            a.yearOfDeath = new Date().getFullYear();
        }
        if (b.yearOfDeath === undefined) {
            b.yearOfDeath = new Date().getFullYear();
        }
        return (b.yearOfDeath - b.yearOfBirth) - (a.yearOfDeath - a.yearOfBirth);
    })
    return sortedArray[0];
};

// Do not edit below this line
module.exports = findTheOldest;
