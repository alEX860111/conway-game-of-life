var app = angular.module("services", []);

function BoardService() {

  this.getNext = function(board) {
    var row;
    var col;
    var tmpBoard = this.createBoard(board.length);
    for (row = 0; row < board.length; row++) {
      for (col = 0; col < board.length; col++) {
        var numNeighbors = this.getNumberOfNeighbors(board, row, col);
        var nextState = this.getNextState(board[row][col], numNeighbors);
        tmpBoard[row][col] = nextState;
      }
    }
    return tmpBoard;
  };

  this.createBoard = function(dim) {
    var board = [];
    var i;
    for (i = 0; i < dim; i++) {
      board.push(_.map(_.range(dim), function(element) {
        return 0;
      }));
    }
    return board;
  };

  this.getNumberOfNeighbors = function(board, row, col) {
    var numNeighbors = 0;
    numNeighbors += this.getState(board, row + 1, col);
    numNeighbors += this.getState(board, row - 1, col);
    numNeighbors += this.getState(board, row, col + 1);
    numNeighbors += this.getState(board, row, col - 1);
    numNeighbors += this.getState(board, row + 1, col + 1);
    numNeighbors += this.getState(board, row + 1, col - 1);
    numNeighbors += this.getState(board, row - 1, col + 1);
    numNeighbors += this.getState(board, row - 1, col - 1);
    return numNeighbors;
  };

  this.getState = function(board, row, col) {
    row = this.validateIndex(row, board);
    col = this.validateIndex(col, board);
    return board[row][col];
  };

  this.validateIndex = function(index, board) {
    if (index >= board.length) {
      return 0;
    }
    if (index < 0) {
      return board.length - 1;
    }
    return index;

  };

  this.getNextState = function(state, numNeighbors) {
    if (numNeighbors === 3) {
      return 1;
    }
    if (numNeighbors === 2) {
      return state;
    }
    return 0;
  };

}

app.service("boardService", [BoardService]);
