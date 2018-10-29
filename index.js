// Code your solution in this file
function findMatching(drivers, name1) {
  return drivers.filter(function (name2) {
    return name2.toLowerCase() === name1.toLowerCase();
  });
}

function fuzzyMatch(drivers, namepart) {
  return drivers.filter(function (name2) {
    return name2.slice(0, namepart.length).toLowerCase() === namepart.toLowerCase();
  });
}


function matchName(drivers, name1) {
  return drivers.filter(function (driver) {
    return driver.name.toLowerCase() === name1.toLowerCase();
  });
}
