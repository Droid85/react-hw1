function squareOfSum(arr) {
	let squareOfSumDigit = arr.reduce((acc, item) => acc + item * item, 0);

	return squareOfSumDigit;
}

squareOfSum([1, 2, 3, 4, 5]);
