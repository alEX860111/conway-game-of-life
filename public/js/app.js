angular.module("myapp", ["game"])
	.controller("gameCtrl", ["$scope", "$timeout", "patterns", "gameService", function($scope, $timeout, patterns, gameService) {
		$scope.gameOver = false;
		$scope.isActive = false;
		$scope.size = 30;
		$scope.roundsPerSecond = 10;
		$scope.round = 0;

		$scope.$watch("roundsPerSecond", function() {
			$scope.updateInterval = 1000 / $scope.roundsPerSecond;
		});

		$scope.$watch("isActive", function() {
			$scope.buttonValue = $scope.isActive ? "Pause" : "Play";
		});

		$scope.loadPattern = function(pattern) {
			$scope.selectedPattern = _.cloneDeep(pattern);
			$scope.rows = $scope.selectedPattern.rows;
			$scope.nextRows = _.cloneDeep($scope.rows);
			$scope.gameOver = false;
		};

		$scope.$watch("gameOver", function() {
			stop();
		});

		$scope.toggleActive = function() {
			if ($scope.isActive) {
				stop();
			} else {
				start();
			}
		};

		function start() {
			$scope.isActive = true;
			$scope.gameOver = false;
			var loop = function() {
				if ($scope.isActive) {
					var tmpRows = $scope.rows;
					$scope.gameOver = gameService.getNext($scope.rows, $scope.nextRows);
					$scope.rows = $scope.nextRows;
					$scope.nextRows = tmpRows;
					$timeout(loop, $scope.updateInterval);
					$scope.round++;
				}
			};
			loop();
		}

		function stop() {
			$scope.isActive = false;
		}

		$scope.changeCellState = function(rowIdx, colIdx) {
			if (!$scope.isActive) {
				$scope.selectedPattern = undefined;
				$scope.rows[rowIdx][colIdx] = !$scope.rows[rowIdx][colIdx];
				$scope.gameOver = false;
			}
		};

		$scope.resetBoard = function() {
			$scope.selectedPattern = undefined;
			gameService.reset($scope.rows);
			$scope.gameOver = false;
			$scope.round = 0;
		};

		$scope.patterns = patterns;

		$scope.loadPattern($scope.patterns[0]);

	}]);
