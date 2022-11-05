const pawn = require("./index");
const solution = require("./system/solution");
const { getRandomInt } = require("./system/environment");

test('Функция должна вернуть булиновое значение', () => {
	const type = typeof pawn(6, 4, 7, 5);

	expect(type).toBe('boolean');
});

test('Тест. x1: 6, y1: 4, x2: 7, y2: 5', () => {
	const res = pawn(6, 4, 7, 5);

	expect(res).toBe(true);
});

test('Тест. x1: 6, y1: 4, x2: 7, y2: 6', () => {
	const res = pawn(6, 4, 7, 6);

	expect(res).toBe(false);
});

test('Тест. x1: 7, y1: 2, x2: 8, y2: 3', () => {
	const res = pawn(7, 2, 8, 3);

	expect(res).toBe(true);
});

test('Тест. x1: 4, y1: 5, x2: 3, y2: 4', () => {
	const res = pawn(4, 5, 3, 4);

	expect(res).toBe(false);
});

test('Тест. x1: 4, y1: 5, x2: 4, y2: 5', () => {
	const res = pawn(4, 5, 4, 5);

	expect(res).toBe(false);
});

test('Тест. x1: 2, y1: 3, x2: 2, y2: 4', () => {
	const res = pawn(2, 3, 2, 4);

	expect(res).toBe(false);
});

test('Auto: random outcomes', () => {
	let failed = false;

	for (let i = 0; i < 100; i++) {
		const randX1 = getRandomInt(1, 8);
		const randY1 = getRandomInt(1, 8);
		const randX2 = getRandomInt(1, 8);
		const randY2 = getRandomInt(1, 8);

		if (randX1 === randX2 && randY1 === randY2) {
			continue;
		}

		if (solution(randX1, randY1, randX2, randY2) !== pawn(randX1, randY1, randX2, randY2)) {
			failed = 'failed';
			break;
		}
	}

	expect(failed).not.toBe('failed');
});