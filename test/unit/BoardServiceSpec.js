describe('BoardService', function() {

  var service;

  beforeEach(function() {
    module('services');
  });

  beforeEach(inject(function(boardService) {
    service = boardService;
  }));

  describe("createBoard", function() {
    it('should create a 2x2 board', function() {
      expect(service.createBoard(2)).toEqual([
        [false, false],
        [false, false]
      ]);
    });

    it('should create a 3x3 board', function() {
      expect(service.createBoard(3)).toEqual([
        [false, false, false],
        [false, false, false],
        [false, false, false]
      ]);
    });
  });

  describe("resetBoard", function() {
    it("should set all cells to dead", function() {
      expect(service.resetBoard([
        [true, false],
        [false, false]
      ])).toEqual([
        [false, false],
        [false, false]
      ]);
    });
  });

  describe("allCellsAreDead", function() {
    it("should tell if all cells are dead or not", function() {
      expect(service.allCellsAreDead([
        [true, false],
        [false, false]
      ])).toEqual(false);
    });
  });

  describe("getNext", function() {
    it('should return the correct next state', function() {
      var state1 = [
        [false, false, false, false, false],
        [false, false, true, false, false],
        [false, false, true, false, false],
        [false, false, true, false, false],
        [false, false, false, false, false]
      ];
      var state2 = [
        [false, false, false, false, false],
        [false, false, false, false, false],
        [false, true, true, true, false],
        [false, false, false, false, false],
        [false, false, false, false, false]
      ];

      expect(service.getNext(state1)).toEqual(state2);
      expect(service.getNext(state2)).toEqual(state1);
    });
  });

  describe("getNumberOfNeighbors", function() {
    it('should return the correct number of neighbors', function() {
      expect(service.getNumberOfNeighbors([
        [true, false],
        [false, false]
      ], 0, 1)).toEqual(2);
    });
  });

  describe("getState", function() {
    it('should return the correct state', function() {
      expect(service.getState([
        [true, false],
        [false, false]
      ], 0, 0)).toEqual(1);
    });

  });

  describe("cellSurvives", function() {
    it('alive cell survives', function() {
      expect(service.cellSurvives(true, 3)).toEqual(true);
      expect(service.cellSurvives(true, 2)).toEqual(true);
    });

    it('alive cell dies due to underpopulation', function() {
      expect(service.cellSurvives(true, 1)).toEqual(false);
    });

    it('alive cell dies due to overpopulation', function() {
      expect(service.cellSurvives(true, 4)).toEqual(false);
    });

    it('dead cell is revived', function() {
      expect(service.cellSurvives(false, 3)).toEqual(true);
    });

    it('dead cell stays dead', function() {
      expect(service.cellSurvives(false, 1)).toEqual(false);
      expect(service.cellSurvives(false, 4)).toEqual(false);
    });
  });

});
