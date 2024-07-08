const findTheOldest = function(array) {
    let ages = array.map((person) => 
        typeof person.yearOfDeath !== 'undefined'?
            person.yearOfDeath - person.yearOfBirth : 
            new Date().getFullYear() - person.yearOfBirth
        );
    let index = 0;
    let oldestAge = ages[0];
    let numOfPeople = array.length;

    for(let i = 1;i < numOfPeople;i ++){
        if(ages[i] > oldestAge){
            index = i;
            oldestAge = ages[i];
        }
    }

    return array[index];
};

// Do not edit below this line
module.exports = findTheOldest;
