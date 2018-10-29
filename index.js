// Code your solution in this file
function findMatching(array, string){
  return array.filter (function(name) {
    return name.toUpperCase() === string.toUpperCase()
  }
 )
}

function fuzzyMatch(drivers, letters) {
  return drivers.filter (function(name) {
    return name.slice(0, letters.length) === letters
  })
}

function matchName(drivers, string) {
  return drivers.filter (function(elem){
    return (elem.name.toUpperCase() === string.toUpperCase())
  })
}
