angular.module("myapp", ["game"])
	.controller("gameCtrl", ["$scope", "$timeout", "patterns", "gameService", function($scope, $timeout, patterns, gameService) {
		$scope.gameOver = false;
		$scope.isActive = false;
		$scope.size = 30;
		$scope.roundsPerSecond = 10;
		$scope.round = 0;

		$scope.rows = undefined;
		var nextRows = undefined;

		$scope.$watch("roundsPerSecond", function() {
			$scope.updateInterval = 1000 / $scope.roundsPerSecond;
		});

		$scope.$watch("isActive", function() {
			$scope.buttonValue = $scope.isActive ? "Pause" : "Play";
		});

		$scope.loadPattern = function(pattern) {
			$scope.selectedPattern = pattern;
			$scope.rows = _.cloneDeep($scope.selectedPattern.rows);
			nextRows = _.cloneDeep($scope.rows);
			$scope.gameOver = false;
			$scope.round = 0;
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
			play();
		}

		function stop() {
			$scope.isActive = false;
		}

		function play() {
			if ($scope.isActive) {
				var tmpRows = $scope.rows;
				$scope.gameOver = gameService.evolve($scope.rows, nextRows);
				$scope.rows = nextRows;
				nextRows = tmpRows;
				$timeout(play, $scope.updateInterval);
				$scope.round++;
			}
		}

		$scope.changeCellState = function(rowIdx, colIdx) {
			if (!$scope.isActive) {
				$scope.rows[rowIdx][colIdx] = !$scope.rows[rowIdx][colIdx];
				$scope.gameOver = false;
			}
		};

		$scope.resetBoard = function() {
			gameService.reset($scope.rows);
			$scope.gameOver = false;
			$scope.round = 0;
		};

		$scope.patterns = patterns;

		$scope.loadPattern($scope.patterns[0]);

	}]);
