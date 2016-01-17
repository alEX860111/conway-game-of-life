angular.module("myapp")
	.directive("stepControl", function() {
		return {
			restrict: "E",
			templateUrl: "views/stepControl.html",
			scope: {
				min: "=",
				max: "=",
				step: "=",
				value: "=",
				decTitle: "@",
				incTitle: "@",
				decClass: "@",
				incClass: "@"
			},
			controller: ["$scope", function($scope) {
				$scope.dec = function() {
					$scope.value = Math.max($scope.min, $scope.value - $scope.step);
				};
				$scope.inc = function() {
					$scope.value = Math.min($scope.max, $scope.value + $scope.step);
				};
			}]
		};
	});
