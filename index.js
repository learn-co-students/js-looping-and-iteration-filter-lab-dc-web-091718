function findMatching(collection , elementToMatch){
return collection.filter(function (element) { return element.toUpperCase() == elementToMatch.toUpperCase(); });
}
function fuzzyMatch(collection , partialSearch){
return collection.filter(function (element) { return element.slice(0, partialSearch.length) == partialSearch});
}
function matchName(collection, nameToMatch){
	return collection.filter(function (element) { return element.name.toUpperCase() == nameToMatch.toUpperCase();});
}