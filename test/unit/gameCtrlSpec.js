describe("gameCtrl", function() {

	var cell;

	var board;

	var boardGenerator;

	var $interval;

	var scope;

	beforeEach(function() {
		module("myapp");
	});

	beforeEach(function() {
		cell = {
			isAlive: false
		};
	});

	beforeEach(function() {
		board = {
			getCell: function() {},
			reset: function() {},
			areAllCellsDead: function() {},
			getNext: function() {}
		};
		spyOn(board, "getCell").and.returnValue(cell);
		spyOn(board, "reset");
		spyOn(board, "getNext").and.returnValue(board);
	});

	beforeEach(inject(function(_boardGenerator_) {
		boardGenerator = _boardGenerator_;
		spyOn(boardGenerator, "generateBoard").and.returnValue(board);
	}));

	beforeEach(inject(function($rootScope, $controller) {
		scope = $rootScope.$new();
		$controller("gameCtrl", {
			$scope: scope
		});
		scope.$apply();
	}));

	it("defaults", function() {
		expect(scope.boardSize).toEqual(5);
		expect(scope.gameOver).toEqual(false);
		expect(scope.isActive).toEqual(false);
		expect(scope.round).toEqual(0);
		expect(scope.buttonValue).toEqual("Play");
		expect(scope.board).toBe(board);
		expect(scope.indices).toEqual([0, 1, 2, 3, 4]);
		expect(boardGenerator.generateBoard).toHaveBeenCalledWith(scope.boardSize);
		expect(boardGenerator.generateBoard.calls.count()).toEqual(1);
	});

	it("toggle buttonValue", function() {
		scope.isActive = true;
		scope.$apply();
		expect(scope.buttonValue).toEqual("Pause");
		scope.isActive = false;
		scope.$apply();
		expect(scope.buttonValue).toEqual("Play");
	});

	it("change boardSize", function() {
		scope.boardSize = 2;
		scope.$apply();
		expect(scope.gameOver).toEqual(false);
		expect(scope.indices).toEqual([0, 1]);
		expect(scope.round).toEqual(0);
		expect(boardGenerator.generateBoard).toHaveBeenCalledWith(scope.boardSize);
		expect(boardGenerator.generateBoard.calls.count()).toEqual(2);
		expect(scope.board).toBe(board);
	});

	it("resetBoard", function() {
		scope.round = 42;
		scope.gameOver = true;
		expect(scope.board.reset.calls.count()).toEqual(0);

		scope.resetBoard();

		expect(scope.round).toEqual(0);
		expect(scope.gameOver).toEqual(false);

		expect(scope.board.reset).toHaveBeenCalled();
		expect(scope.board.reset.calls.count()).toEqual(1);
	});

	it("changeCellState", function() {
		scope.gameOver = true;

		expect(cell.isAlive).toEqual(false);

		scope.changeCellState(2, 3);

		expect(scope.gameOver).toEqual(false);
		expect(scope.board.getCell).toHaveBeenCalledWith(2, 3);
		expect(scope.board.getCell.calls.count()).toEqual(1);
		expect(cell.isAlive).toEqual(true);
	});

	it("toggleActive", function() {
		spyOn(board, "areAllCellsDead").and.returnValue(false);

		scope.isActive = false;
		scope.gameOver = true;

		scope.toggleActive();

		expect(scope.isActive).toEqual(true);
		expect(scope.gameOver).toEqual(false);

		expect(scope.gameOver).toEqual(false);
		expect(scope.round).toEqual(1);
		expect(scope.board.getNext).toHaveBeenCalled();
		expect(scope.board.areAllCellsDead).toHaveBeenCalled();
	});

});
