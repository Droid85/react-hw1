function maxLengthWorldFinder(str) {
	let strArr = str.split(' ');
	let maxLengthWord = str[0];

	strArr.forEach(el => {
		if (el.length > maxLengthWord.length) {
			maxLengthWord = el;
		}
	})

	return maxLengthWord;
}

maxLengthWorldFinder("What is the average airspeed velocity of an unladen swallow");
