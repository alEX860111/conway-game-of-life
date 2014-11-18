describe('BoardService', function() {

  var service;

  beforeEach(function() {
    module('services');
  });

  beforeEach(inject(function(boardService) {
    service = boardService;
  }));

  it('createBoard should create a 2x2 board', function() {
    expect(service.createBoard(2)).toEqual([
      [false, false],
      [false, false]
    ]);
  });

  it('createBoard should create a 3x3 board', function() {
    expect(service.createBoard(3)).toEqual([
      [false, false, false],
      [false, false, false],
      [false, false, false]
    ]);
  });

  it('getNext', function() {
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

  it('getNumberOfNeighbors', function() {
    expect(service.getNumberOfNeighbors([
      [true, false],
      [false, false]
    ], 0, 1)).toEqual(2);
  });

  it('getState', function() {
    expect(service.getState([
      [true, false],
      [false, false]
    ], 0, 0)).toEqual(1);
  });

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
