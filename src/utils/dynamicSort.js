export function dynamicSort(property, objKey = 'nome') {
	let sortOrder = 1;
	if (property[0] === '-') {
		sortOrder = -1;
		property = property.substr(1);
	}
	return function (a, b) {
		let result = 0;
		if (typeof a[property] === 'object' && typeof b[property] === 'object') {
			result =
				a[property][objKey] < b[property][objKey]
					? -1
					: a[property][objKey] > b[property][objKey]
						? 1
						: 0;
		} else {
			result =
				a[property] < b[property] ? -1 : a[property] > b[property] ? 1 : 0;
		}
		return result * sortOrder;
	};
}
