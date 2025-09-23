const fibonacci = function (n) {
    if (n < 0) return "OOPS"
    
    let current = 1;
    let prev = 1;
    let aux = 0;

    for (let index = 0; index < n; index++) {
        console.log(current)
        console.log(prev)
        aux = prev + current;
        prev = current;
        current = aux;
    }

    return current - prev;
};
// Do not edit below this line
module.exports = fibonacci;
