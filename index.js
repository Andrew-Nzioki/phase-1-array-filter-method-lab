// Code your solution here

const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']
function findMatching(drivers, name) {
    return drivers.filter(driver => driver.toLowerCase() === name.toLowerCase());
  }
console.log(findMatching())

function fuzzyMatch(drivers,name){
    return drivers.filter(driver => driver[0] === name[0])
}

function matchName(drivers,name){
  
    const matches= drivers.filter(driver => driver.name === name);

    return matches
}