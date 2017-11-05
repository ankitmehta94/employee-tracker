const util = {};

util.splitArray = function (array, size) {
	var arrays = [];
	while (array.length > 0)
		arrays.push(array.splice(0, size));
	return arrays;
}

export default util;