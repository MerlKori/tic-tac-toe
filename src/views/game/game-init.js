function rand (min , max) {
	const diff = max - min;
	return Math.floor(Math.random() * (diff + 1)) + min;
}

export function createActivePlayerData (player_1, player_2, labels) {
	const condition = rand(1, 2) === 1;
	return {
		name: condition ? player_1 : player_2, /* set random first player */
		label: condition ? labels.x : labels.o
	};
}

export function createBoardMap (size) {
	const length = size * size;
	return Array(length).fill(null);
}
