var app = angular.module("myapp", []);

app.controller("myctrl", function($scope, $interval) {
  $scope.board = [
    [0, 0, 0, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 0, 0, 0]
  ];
  $scope.nextBoard = [
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0]
  ];

  $interval(function() {
    var row;
    var col;
    var tmpBoard;
    for (row = 0; row < $scope.board.length; row++) {
      for (col = 0; col < $scope.board.length; col++) {
        var numNeighbors = getNumberOfNeighbors(row, col);
        var nextState = getNextState($scope.board[row][col], numNeighbors);
        $scope.nextBoard[row][col] = nextState;
      }
    }
    tmpBoard = $scope.board;
    $scope.board = $scope.nextBoard;
    $scope.nextBoard = tmpBoard;

  }, 2000);

  function getNextState(state, numNeighbors) {
    var isAlive = (state === 1);
    return isAlive ? getNextStateForAliveCell(numNeighbors) : getNextStateForDeadCell(numNeighbors);
  }

  function getNextStateForAliveCell(numNeighbors) {
    return ((numNeighbors === 2)|| (numNeighbors === 3)) ? 1 : 0;
  }

  function getNextStateForDeadCell(numNeighbors) {
    return (numNeighbors === 3) ? 1 : 0;
  }

  function getNumberOfNeighbors(row, col) {
    var numNeighbors = 0;
    numNeighbors += isAlive(row + 1, col);
    numNeighbors += isAlive(row - 1, col);
    numNeighbors += isAlive(row, col + 1);
    numNeighbors += isAlive(row, col - 1);
    numNeighbors += isAlive(row + 1, col + 1);
    numNeighbors += isAlive(row + 1, col - 1);
    numNeighbors += isAlive(row - 1, col + 1);
    numNeighbors += isAlive(row - 1, col - 1);
    return numNeighbors;
  }

  function isAlive(row, col) {
    if (row >= $scope.board.length) {
      row = 0;
    }
    if (row < 0) {
      row = $scope.board.length - 1;
    }
    if (col >= $scope.board.length) {
      col = 0;
    }
    if (col < 0) {
      col = $scope.board.length - 1;
    }
    return $scope.board[row][col];
  }

});
