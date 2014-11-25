var app = angular.module("myapp", ["services"]);

app.controller("myctrl", function($scope, $interval, boardService) {
  $scope.boardSize = 5;

  $scope.board = boardService.createBoard($scope.boardSize);

  var promise;

  $scope.isActive = false;
  $scope.round = 0;

  $scope.$watch('isActive', function() {
    $scope.buttonValue = $scope.isActive ? "Stop" : "Start";
  });

  $scope.$watch('boardSize', function() {
    $scope.board = boardService.createBoard($scope.boardSize);
  });

  $scope.toggleActive = function() {
    if ($scope.isActive) {
      stop();
    } else {
      start();
    }
  };

  function start() {
    promise = $interval(function() {
      $scope.board = boardService.getNext($scope.board);
      $scope.round++;
    }, 2000);
    $scope.isActive = true;
  }

  function stop() {
    $interval.cancel(promise);
    $scope.isActive = false;
    $scope.round = 0;
  }

  $scope.changeCellState = function(row, col) {
    if (!$scope.isActive) {
      $scope.board[row][col] = !$scope.board[row][col];
    }
  };

  $scope.resetBoard = function() {
    $scope.board = boardService.resetBoard($scope.board);
  };

});
