const removeFromArray = function(mainArray, ...arrayOfElements) {
    for (let i = 0; i < arrayOfElements.length; i++) {
        for (let j = 0; j < mainArray.length; j++) {
            if (arrayOfElements[i] === mainArray[j]) {
                    mainArray.splice(j, 1);
                    j -= 1;
                    continue;
            }
        }
    }
    return mainArray;
};

// Do not edit below this line
module.exports = removeFromArray;
