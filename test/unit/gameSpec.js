describe("gameService", function() {

	var rows;

	var nextRows;

	var gameService;

	beforeEach(function() {
		module("game");
	});

	beforeEach(inject(function(_gameService_) {
		gameService = _gameService_;
	}));

	beforeEach(function() {
		rows = [
			[false, false, false, false, false],
			[false, false, false, false, false],
			[false, false, false, false, false],
			[false, false, false, false, false],
			[false, false, false, false, false]
		];
		nextRows = _.cloneDeep(rows);
	});

	describe("reset", function() {

		it("should reset all cells", function() {
			rows[1][2] = true;
			rows[2][2] = true;
			rows[3][2] = true;

			gameService.reset(rows);

			expect(rows).toEqual([
				[false, false, false, false, false],
				[false, false, false, false, false],
				[false, false, false, false, false],
				[false, false, false, false, false],
				[false, false, false, false, false]
			]);
		});

	});

	describe("getNext", function() {

		it("should return the next rows", function() {
			rows[1][2] = true;
			rows[2][2] = true;
			rows[3][2] = true;

			var gameOver = gameService.getNext(rows, nextRows);

			expect(gameOver).toBe(false);

			expect(nextRows).toEqual([
				[false, false, false, false, false],
				[false, false, false, false, false],
				[false, true, true, true, false],
				[false, false, false, false, false],
				[false, false, false, false, false]
			]);
		});

	});

});
