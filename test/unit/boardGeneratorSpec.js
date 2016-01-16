describe("board", function() {

	function getStates(board, size) {
		var states = [];
		var row;
		var rowIndex;
		var colIndex;
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
		module("services");
	});

	beforeEach(inject(function(_boardGenerator_) {
		board = _boardGenerator_.generateBoard(5);
	}));

	it("should reset the board", function() {
		expect([
			[false, false, false, false, false],
			[false, false, false, false, false],
			[false, false, false, false, false],
			[false, false, false, false, false],
			[false, false, false, false, false]
		]).toEqual(getStates(board, 5));
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
			]).toEqual(getStates(board, 5));

			var nextBoard = board.getNext();

			expect([
				[false, false, false, false, false],
				[false, false, false, false, false],
				[false, true, true, true, false],
				[false, false, false, false, false],
				[false, false, false, false, false]
			]).toEqual(getStates(nextBoard, 5));
		});

	});

});
