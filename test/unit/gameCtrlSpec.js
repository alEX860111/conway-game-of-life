describe("gameCtrl", function() {

	var gameService;

	var scope;

	beforeEach(function() {
		module("myapp");
	});

	beforeEach(inject(function(_gameService_) {
		gameService = _gameService_;
		spyOn(gameService, "evolve").and.callThrough();
	}));

	beforeEach(inject(function($rootScope, $controller) {
		scope = $rootScope.$new();
		$controller("gameCtrl", {
			$scope: scope
		});
		scope.$apply();
	}));

	it("defaults", function() {
		expect(scope.gameOver).toBe(false);
		expect(scope.isActive).toBe(false);
		expect(scope.size).toEqual(30);
		expect(scope.roundsPerSecond).toEqual(10);
		expect(scope.round).toEqual(0);
		expect(scope.buttonValue).toEqual("Play");
		expect(scope.rows).toBeDefined();
		expect(scope.updateInterval).toEqual(100);
	});

	it("toggle buttonValue", function() {
		scope.isActive = true;
		scope.$apply();
		expect(scope.buttonValue).toEqual("Pause");
		scope.isActive = false;
		scope.$apply();
		expect(scope.buttonValue).toEqual("Play");
	});

	it("changeCellState", function() {
		scope.gameOver = true;
		scope.activePatternTitle = "something";

		scope.changeCellState(2, 3);

		expect(scope.gameOver).toEqual(false);
		expect(scope.activePatternTitle).toEqual("Custom");
	});

	it("toggleActive", function() {
		scope.isActive = false;
		scope.gameOver = true;

		scope.toggleActive();

		expect(scope.isActive).toEqual(true);
		expect(scope.gameOver).toEqual(false);

		expect(gameService.evolve).toHaveBeenCalled();
	});

});
