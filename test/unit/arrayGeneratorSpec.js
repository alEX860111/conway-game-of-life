describe("arrayGenerator", function() {

	var arrayGenerator;

	beforeEach(function() {
		module("services");
	});

	beforeEach(inject(function(_arrayGenerator_) {
		arrayGenerator = _arrayGenerator_;
	}));

	describe("generateArray", function() {

		it("should create an array of strings", function() {
			var array = arrayGenerator.generateArray(2, function() {
				return "a";
			});
			expect(array.length).toEqual(2);
			expect(array).toEqual(["a", "a"]);
		});

		it("should create an array of numbers", function() {
			var array = arrayGenerator.generateArray(3, function() {
				return 1;
			});
			expect(array.length).toEqual(3);
			expect(array).toEqual([1, 1, 1]);
		});

	});

});
