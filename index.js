function pawn(x1, y1, x2, y2) {
	return Math.abs(x1 - x2) === 1 && y1 + 1 === y2;
}

module.exports = pawn;