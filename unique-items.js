function uniqueItemsFinder(arr) {
	let uniqueItemsArr = arr.reduce((acc, item) => (acc.includes(item) ? acc : [...acc, item]), []);

	return uniqueItemsArr;
}

uniqueItemsFinder(['doom', 'MK', 'bioshock', 'doom', 'MK', 'systemshock', 'zelda']);
