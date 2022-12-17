function arrConverter(arr, newArr = []) {
	arr.forEach(el => {
		if (Array.isArray(el)) {
			arrConverter(el, newArr);
		} else {
			newArr.push(el);
		}
	})

	return newArr;
}

console.log(arrConverter([1, 2, [3, 4, [5]]]));
