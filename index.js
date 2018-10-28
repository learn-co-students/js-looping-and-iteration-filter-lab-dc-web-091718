const findMatching = (obj, item) => {
  return obj.filter(function (driver) {return driver.toLowerCase() === item.toLowerCase() })
}

const fuzzyMatch = (obj, search) => {
  return obj.filter(function (driver) {return driver.slice(0, search.length).toLowerCase() === search.toLowerCase()})
}

const matchName = (obj, search) => {
  return obj.filter(function (element) {return element.name.toLowerCase() === search.toLowerCase()});
}
