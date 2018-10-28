function findMatching(collection, driverToFind) {
  return collection.filter(function (driver) {
    return driver.toLowerCase() === driverToFind.toLowerCase();
  });
}

function fuzzyMatch(drivers, string) {
  const stringLength = string.length
  return drivers.filter(function(driver) {
    return driver.slice(0, stringLength) === string;
  });
}

function matchName(drivers, string) {
  return drivers.filter(function (driver) {
    return driver.name === string;
  });
}