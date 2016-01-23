describe("survives", function() {

	var survives;

	beforeEach(function() {
		module("game");
	});

	beforeEach(inject(function(_survives_) {
		survives = _survives_
	}));

	it("Any alive cell with fewer than two alive neighbours dies, as if caused by under-population.", function() {
		expect(survives(true, 0)).toEqual(false);
		expect(survives(true, 1)).toEqual(false);
	});

	it("Any alive cell with two or three alive neighbours lives on to the next generation.", function() {
		expect(survives(true, 2)).toEqual(true);
		expect(survives(true, 3)).toEqual(true);
	});

	it("Any alive cell with more than three alive neighbours dies, as if by overcrowding.", function() {
		expect(survives(true, 4)).toEqual(false);
	});

	it("Any dead cell with exactly three alive neighbours becomes an alive cell, as if by reproduction", function() {
		expect(survives(false, 0)).toEqual(false);
		expect(survives(false, 1)).toEqual(false);
		expect(survives(false, 2)).toEqual(false);
		expect(survives(false, 3)).toEqual(true);
		expect(survives(false, 4)).toEqual(false);
	});

});
