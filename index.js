// Code your solution in this file
function findMatching (drivers, name) {
	return drivers.filter(function(driverName) {
		if (driverName.toLowerCase() === name.toLowerCase()) {
			return driverName;
		}
	})
}

function fuzzyMatch (drivers, pattern) {
	return drivers.filter(function (driverName) {
		if (driverName.toLowerCase().startsWith(pattern.toLowerCase())) {
			return driverName;
		}
	})
}

function matchName (drivers, name) {
	return drivers.filter(function (driver) {
		return driver.name.toLowerCase() == name.toLowerCase();
	})
}