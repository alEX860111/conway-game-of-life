describe("matrixGenerator", function() {

	var matrixGenerator;

	beforeEach(function() {
		module("services");
	});

	beforeEach(inject(function(_matrixGenerator_) {
		matrixGenerator = _matrixGenerator_;
	}));

	it("should create a two dimensional matrix of numbers", function() {
		var matrix = matrixGenerator.createMatrix(2, function() {
			return 1;
		});
		expect(matrix).toEqual([
			[1, 1],
			[1, 1]
		]);
	});

	it("should create a two dimensional matrix of strings", function() {
		var matrix = matrixGenerator.createMatrix(2, function() {
			return "abc";
		});
		expect(matrix).toEqual([
			["abc", "abc"],
			["abc", "abc"]
		]);
	});

});
