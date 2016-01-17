describe("gameCtrl", function() {

	var cell;

	var board;

	var boardOption;

	var boardService;

	var $interval;

	var scope;

	beforeEach(function() {
		module("myapp");
	});

	beforeEach(function() {
		cell = jasmine.createSpyObj("cell", ["toggleIsAlive"]);
	});

	beforeEach(function() {
		board = jasmine.createSpyObj("board", ["getCell", "getSize", "reset", "areAllCellsDead", "getNext"]);
		board.getCell.and.returnValue(cell);
		board.getSize.and.returnValue(5);
		board.areAllCellsDead.and.returnValue(false);
		board.getNext.and.returnValue(board);
	});

	beforeEach(function() {
		boardOption = jasmine.createSpyObj("boardOption", ["createBoard"]);
		boardOption.createBoard.and.returnValue(board);
	});

	beforeEach(inject(function(_boardService_) {
		boardService = _boardService_;
		spyOn(boardService, "getBoards").and.returnValue([boardOption]);
	}));

	beforeEach(inject(function($rootScope, $controller) {
		scope = $rootScope.$new();
		$controller("gameCtrl", {
			$scope: scope
		});
		scope.$apply();
	}));

	it("defaults", function() {
		expect(scope.gameOver).toEqual(false);
		expect(scope.isActive).toEqual(false);
		expect(scope.buttonValue).toEqual("Play");
		expect(scope.board).toBe(board);
		expect(scope.indices).toEqual([0, 1, 2, 3, 4]);
		expect(boardService.getBoards).toHaveBeenCalled();
	});

	it("toggle buttonValue", function() {
		scope.isActive = true;
		scope.$apply();
		expect(scope.buttonValue).toEqual("Pause");
		scope.isActive = false;
		scope.$apply();
		expect(scope.buttonValue).toEqual("Play");
	});

	it("resetBoard", function() {
		scope.gameOver = true;
		expect(scope.board.reset.calls.count()).toEqual(0);

		scope.resetBoard();

		expect(scope.gameOver).toEqual(false);

		expect(scope.board.reset).toHaveBeenCalled();
		expect(scope.board.reset.calls.count()).toEqual(1);
	});

	it("changeCellState", function() {
		scope.gameOver = true;
		expect(scope.board.getCell.calls.count()).toEqual(0);
		expect(cell.toggleIsAlive.calls.count()).toEqual(0);

		scope.changeCellState(2, 3);

		expect(scope.gameOver).toEqual(false);

		expect(scope.board.getCell).toHaveBeenCalledWith(2, 3);
		expect(scope.board.getCell.calls.count()).toEqual(1);

		expect(cell.toggleIsAlive).toHaveBeenCalled();
		expect(cell.toggleIsAlive.calls.count()).toEqual(1);
	});

	it("toggleActive", function() {
		scope.isActive = false;
		scope.gameOver = true;

		scope.toggleActive();

		expect(scope.isActive).toEqual(true);
		expect(scope.gameOver).toEqual(false);

		expect(scope.gameOver).toEqual(false);
		expect(scope.board.getNext).toHaveBeenCalled();
		expect(scope.board.areAllCellsDead).toHaveBeenCalled();
	});

});
