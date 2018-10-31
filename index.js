// Code your solution in this file
function findMatching(driversArr, name) {
  return driversArr.filter(function(listedDriver) {
  return listedDriver.toLowerCase() === name.toLowerCase();
  });
}

function fuzzyMatch(driversArr, name){
  return driversArr.filter(function(listedDriver) {
    return listedDriver.charAt(0) === name.charAt(0);
  });
}

function matchName(driversArr, name) {
  return driversArr.filter(function(listedDriver) {
  return listedDriver.name.toLowerCase() === name.toLowerCase();
  });
}
