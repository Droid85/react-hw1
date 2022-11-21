function isArraysEqual(arr1, arr2) {
	if (arr1.length === arr2.length) {
		arr1.forEach((el, index) => {
			if (el !== arr2[index]) {
				return false;
			}
		})
	} else {
		return false;
	}

	return true;
}

isArraysEqual([1, 2, 3], [1, 2, 3]);
