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

	it("all cells should be dead at the beginning", function() {
		expect([
			[false, false, false, false, false],
			[false, false, false, false, false],
			[false, false, false, false, false],
			[false, false, false, false, false],
			[false, false, false, false, false]
		]).toEqual(getStates(board));
	});

	describe("areAllCellsDead()", function() {
		it("should return if all cells are dead or not", function() {
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

			expect(board.getRound()).toEqual(0);

			var nextBoard = board.getNext();

			expect(board.getRound()).toEqual(1);

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
