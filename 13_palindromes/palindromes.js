const palindromes = function (string) {
    string = string.replace(/\p{P}+/gu, '').trim().split(' ').join('').toLowerCase();
    aux = string.split('').reverse().join('');

    return string == aux ? true : false;
};


// Do not edit below this line
module.exports = palindromes;
