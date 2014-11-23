var app = angular.module("services", []);

function BoardService() {

  this.createBoard = function(dim) {
    return createArray(dim, function() {
      return createArray(dim, function() {
        return false;
      });
    });
  };

  function createArray(dim, getValue) {
    var array = [];
    _.times(dim, function() {
      array.push(getValue());
    });
    return array;
  }

  this.resetBoard = function(board) {
    var row;
    var col;
    for (row = 0; row < board.length; row++) {
      for (col = 0; col < board.length; col++) {
        board[row][col] = false;
      }
    }
    return board;
  };

  this.getNext = function(board) {
    var row;
    var col;
    var next = this.createBoard(board.length);
    for (row = 0; row < board.length; row++) {
      for (col = 0; col < board.length; col++) {
        var numNeighbors = this.getNumberOfNeighbors(board, row, col);
        var cellSurvives = this.cellSurvives(board[row][col], numNeighbors);
        next[row][col] = cellSurvives;
      }
    }
    return next;
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
    return board[row][col] ? 1 : 0;
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

  this.cellSurvives = function(isAlive, numNeighbors) {
    if (numNeighbors === 3) {
      return true;
    }
    if (numNeighbors === 2) {
      return isAlive;
    }
    return false;
  };

}

app.service("boardService", [BoardService]);
