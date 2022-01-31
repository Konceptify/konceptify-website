export const toCapitalCase = (string) => {
	const arr = string.split(' ')

	for (var i = 0; i < arr.length; i++) {
		arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1)
	}

	const str2 = arr.join(' ')
	return str2
}

export function getRandom(arr, n) {
	var result = new Array(n),
		len = arr.length,
		taken = new Array(len)
	if (n > len)
		throw new RangeError('getRandom: more elements taken than available')
	while (n--) {
		var x = Math.floor(Math.random() * len)
		result[n] = arr[x in taken ? taken[x] : x]
		taken[x] = --len in taken ? taken[len] : len
	}
	return result
}
