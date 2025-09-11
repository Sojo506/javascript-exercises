const removeFromArray = function(array, ...args) {
    return array.filter(n => !args.includes(n));
};

// Do not edit below this line
module.exports = removeFromArray;
