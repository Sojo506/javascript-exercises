const findTheOldest = function (arrayOfPeople) {
    return arrayOfPeople
        .map(person => {
            const death = person.hasOwnProperty('yearOfDeath') ? person.yearOfDeath : new Date().getFullYear();
            return [person, death - person.yearOfBirth];
        })
        .reduce((prev, current) => {
            return prev[1] < current[1] ? current : prev;
        })[0];
};

// Do not edit below this line
module.exports = findTheOldest;
