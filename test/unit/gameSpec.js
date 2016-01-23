describe("gameService", function() {

	var gameService, rows, nextRows;

	beforeEach(function() {
		module("game");
	});

	beforeEach(inject(function(_gameService_) {
		gameService = _gameService_;
	}));

	beforeEach(function() {
		rows = [
			[false, false, false, false, false],
			[false, false, true, false, false],
			[false, false, true, false, false],
			[false, false, true, false, false],
			[false, false, false, false, false]
		];
		nextRows = _.cloneDeep(rows);
	});

	describe("reset", function() {
		it("should reset all cells", function() {
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

	describe("evolve", function() {
		it("should return the next rows", function() {
			var gameOver = gameService.evolve(rows, nextRows);
			expect(gameOver).toBe(false);
			expect(rows).toEqual([
				[false, false, false, false, false],
				[false, false, true, false, false],
				[false, false, true, false, false],
				[false, false, true, false, false],
				[false, false, false, false, false]
			]);
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
