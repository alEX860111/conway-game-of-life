var app = angular.module("myapp", ["services"]);

app.controller("myctrl", function($scope, $interval, boardService) {
  $scope.board = boardService.createBoard(5);
  $scope.board[1][2] = 1;
  $scope.board[2][2] = 1;
  $scope.board[3][2] = 1;

  $interval(function() {
    $scope.board = boardService.getNext($scope.board);
  }, 2000);

});
