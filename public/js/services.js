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
    if (row >= board.length) {
      row = 0;
    }
    if (row < 0) {
      row = board.length - 1;
    }
    if (col >= board.length) {
      col = 0;
    }
    if (col < 0) {
      col = board.length - 1;
    }
    return board[row][col];
  };

  this.getNextState = function(state, numNeighbors) {
    var isAlive = (state === 1);
    return isAlive ? this.getNextStateForAliveCell(numNeighbors) : this.getNextStateForDeadCell(numNeighbors);
  };

  this.getNextStateForAliveCell = function(numNeighbors) {
    return ((numNeighbors === 2) || (numNeighbors === 3)) ? 1 : 0;
  };

  this.getNextStateForDeadCell = function(numNeighbors) {
    return (numNeighbors === 3) ? 1 : 0;
  };

}

app.service("boardService", [BoardService]);
