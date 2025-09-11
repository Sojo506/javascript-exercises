const repeatString = function(string, num) {
    let aux = "";
    if(num < 0) return "ERROR";
    
    for(let i = 0; i <num; i++){
        aux += string;
    }

    return aux;
};

// Do not edit below this line
module.exports = repeatString;
