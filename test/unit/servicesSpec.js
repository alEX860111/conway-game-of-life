describe('BoardService', function() {

  var service;

  beforeEach(function() {
    module('services');
  });

  beforeEach(inject(function(boardService) {
    service = boardService;
  }));

  it('createBoard', function() {
    expect(service.createBoard(2)).toEqual([
      [0, 0],
      [0, 0]
    ]);
    expect(service.createBoard(3)).toEqual([
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0]
    ]);
  });

  it('getState', function() {
    expect(service.getState([
      [1, 0],
      [0, 0]
    ], 0, 0)).toEqual(1);
  });

  it('getNumberOfNeighbors', function() {
    expect(service.getNumberOfNeighbors([
      [1, 0],
      [0, 0]
    ], 0, 1)).toEqual(2);
  });

});
