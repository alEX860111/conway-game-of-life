var app = angular.module("myapp", []);

app.controller("myctrl", function($scope, $interval) {
    $scope.board = [[0,0,0,0,0],
                    [0,0,1,0,0],
                    [0,0,1,0,0],
                    [0,0,1,0,0],
                    [0,0,0,0,0]];
    $interval(function() {
        console.log("test");
    }, 1000);
});