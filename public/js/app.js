var app = angular.module("myapp", ["services"]);

app.controller("myctrl", function($scope, $interval, boardService) {
  $scope.board = boardService.createBoard(5);
  $scope.board[1][2] = true;
  $scope.board[2][2] = true;
  $scope.board[3][2] = true;

  var promise;
  $scope.isActive = false;

  $scope.$watch('isActive', function() {
    $scope.buttonValue = $scope.isActive ? "Stop" : "Start";
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
    }, 2000);
    $scope.isActive = true;
  }

  function stop() {
    $interval.cancel(promise);
    $scope.isActive = false;
  }

});
