describe("matrix", function() {

	var matrix;

	beforeEach(function() {
		module("services");
	});

	beforeEach(inject(function(_matrixGenerator_) {
		var num = 1;
		matrix = _matrixGenerator_.generateMatrix(3, function() {
			return num++;
		});
	}));

	describe("getSize", function() {

		it("should return the correct size of the matrix", function() {
			expect(matrix.getSize()).toEqual(3);
		});

	});

	describe("getElement", function() {

		it("should return the correct matrix element", function() {
			expect(matrix.getElement(0, 0)).toEqual(1);
			expect(matrix.getElement(0, 1)).toEqual(2);
			expect(matrix.getElement(0, 2)).toEqual(3);
			expect(matrix.getElement(1, 0)).toEqual(4);
			expect(matrix.getElement(1, 1)).toEqual(5);
			expect(matrix.getElement(1, 2)).toEqual(6);
			expect(matrix.getElement(2, 0)).toEqual(7);
			expect(matrix.getElement(2, 1)).toEqual(8);
			expect(matrix.getElement(2, 2)).toEqual(9);
		});

		it("should return the correct matrix element if column index is out of bounds", function() {
			expect(matrix.getElement(0, -1)).toEqual(3);
			expect(matrix.getElement(0, 3)).toEqual(1);
			expect(matrix.getElement(1, -1)).toEqual(6);
			expect(matrix.getElement(1, 3)).toEqual(4);
			expect(matrix.getElement(2, -1)).toEqual(9);
			expect(matrix.getElement(2, 3)).toEqual(7);
		});

		it("should return the correct matrix element if column index is out of bounds", function() {
			expect(matrix.getElement(-1, 0)).toEqual(7);
			expect(matrix.getElement(3, 0)).toEqual(1);
			expect(matrix.getElement(-1, 1)).toEqual(8);
			expect(matrix.getElement(3, 1)).toEqual(2);
			expect(matrix.getElement(-1, 2)).toEqual(9);
			expect(matrix.getElement(3, 2)).toEqual(3);
		});

	});

	describe("visitAllElements", function() {

		it("should visit all elements in the matrix", function() {
			var sum = 0;
			matrix.visitAllElements(function(element) {
				sum += element;
			});
			expect(sum).toEqual(45)
		});

	});

	describe("visitNeighbors", function() {

		it("should visit the eight neighbors of a matrix element", function() {
			var sum = 0;
			var numNeighbors = 0;
			matrix.visitNeighborElements(1, 1, function(element) {
				numNeighbors++;
				sum += element;
			});
			expect(numNeighbors).toEqual(8);
			expect(sum).toEqual(40);
		});

	});

});
