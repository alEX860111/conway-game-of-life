describe("cell", function() {

	var cell;

	beforeEach(function() {
		module("game.of.life.core");
	});

	beforeEach(inject(function(_cellGenerator_) {
		cell = _cellGenerator_.generateCell();
	}));

	it("should be dead after construction", function() {
		expect(cell.isAlive).toEqual(false);
	});

	it("should toggle the state correctly", function() {
		expect(cell.toggleIsAlive()).toEqual(true);
		expect(cell.isAlive).toEqual(true);
	});

	it("Any alive cell with fewer than two alive neighbours dies, as if caused by under-population.", function() {
		cell.isAlive = true;
		expect(cell.survives(0)).toEqual(false);
		expect(cell.survives(1)).toEqual(false);
	});

	it("Any alive cell with two or three alive neighbours lives on to the next generation.", function() {
		cell.isAlive = true;
		expect(cell.survives(2)).toEqual(true);
		expect(cell.survives(3)).toEqual(true);
	});

	it("Any alive cell with more than three alive neighbours dies, as if by overcrowding.", function() {
		cell.isAlive = true;
		expect(cell.survives(4)).toEqual(false);
	});

	it("Any dead cell with exactly three alive neighbours becomes an alive cell, as if by reproduction", function() {
		cell.isAlive = false;
		expect(cell.survives(0)).toEqual(false);
		expect(cell.survives(1)).toEqual(false);
		expect(cell.survives(2)).toEqual(false);
		expect(cell.survives(3)).toEqual(true);
		expect(cell.survives(4)).toEqual(false);
	});

});
