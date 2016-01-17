describe("board", function() {

	function getStates(board) {
		var states = [];
		var row;
		var rowIndex;
		var colIndex;
		var size = board.getSize();
		for (rowIndex = 0; rowIndex < size; rowIndex++) {
			row = [];
			for (colIndex = 0; colIndex < size; colIndex++) {
				row.push(board.getCell(rowIndex, colIndex).isAlive);
			}
			states.push(row);
		}
		return states;
	}

	var board;

	beforeEach(function() {
		module("game.of.life.core");
	});

	beforeEach(inject(function(boardGenerator) {
		board = boardGenerator.generateBoard(5);
	}));

	describe("boardGenerator", function() {
		it("should generate a board", function() {
			expect([
				[false, false, false, false, false],
				[false, false, false, false, false],
				[false, false, false, false, false],
				[false, false, false, false, false],
				[false, false, false, false, false]
			]).toEqual(getStates(board));
		});
	});

	describe("reset", function() {
		it("should reset the board", function() {
			expect(board.areAllCellsDead()).toEqual(true);
			board.getCell(0, 0).isAlive = true;
			expect(board.areAllCellsDead()).toEqual(false);
		});
	});

	describe("getNext", function() {

		it("should return the next board", function() {
			board.getCell(1, 2).isAlive = true;
			board.getCell(2, 2).isAlive = true;
			board.getCell(3, 2).isAlive = true;

			expect([
				[false, false, false, false, false],
				[false, false, true, false, false],
				[false, false, true, false, false],
				[false, false, true, false, false],
				[false, false, false, false, false]
			]).toEqual(getStates(board));

			var nextBoard = board.getNext();

			expect([
				[false, false, false, false, false],
				[false, false, false, false, false],
				[false, true, true, true, false],
				[false, false, false, false, false],
				[false, false, false, false, false]
			]).toEqual(getStates(nextBoard));
		});

	});

});
