angular.module("myapp", ["services"])
	.controller("gameCtrl", ["$scope", "$timeout", "boardService", function($scope, $timeout, boardService) {
		$scope.gameOver = false;
		$scope.isActive = false;
		$scope.round = 0;

		var stepSize = 10;
		$scope.minSize = 10;
		$scope.maxSize = 100;
		$scope.size = 30;

		$scope.updateInterval = 1000;

		var stepRoundsPerSecond = 1;
		$scope.minRoundsPerSecond = 1;
		$scope.maxRoundsPerSecond = 10;
		$scope.roundsPerSecond = 3;

		$scope.$watch("roundsPerSecond", function() {
			$scope.updateInterval = 1000 / $scope.roundsPerSecond;
		});

		$scope.$watch("isActive", function() {
			$scope.buttonValue = $scope.isActive ? "Pause" : "Play";
		});

		$scope.increaseSpeed = function() {
			var newRoundsPerSecond = $scope.roundsPerSecond + stepRoundsPerSecond;
			$scope.roundsPerSecond = (newRoundsPerSecond > $scope.maxRoundsPerSecond) ? $scope.maxRoundsPerSecond : newRoundsPerSecond;
		};

		$scope.decreaseSpeed = function() {
			var newRoundsPerSecond = $scope.roundsPerSecond - stepRoundsPerSecond;
			$scope.roundsPerSecond = (newRoundsPerSecond < $scope.minRoundsPerSecond) ? $scope.minRoundsPerSecond : newRoundsPerSecond;
		};

		$scope.zoomOut = function() {
			var newSize = $scope.size - stepSize;
			$scope.size = (newSize < $scope.minSize) ? $scope.minSize : newSize;
		};

		$scope.zoomIn = function() {
			var newSize = $scope.size + stepSize;
			$scope.size = (newSize > $scope.maxSize) ? $scope.maxSize : newSize;
		};

		$scope.loadBoard = function(board) {
			$scope.selectedBoard = board;
			$scope.board = board.createBoard();
			$scope.indices = _.range($scope.board.getSize());
			$scope.round = 0;
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
					$scope.board = $scope.board.getNext();
					$scope.round++;
					$scope.gameOver = $scope.board.areAllCellsDead();
					$timeout(loop, $scope.updateInterval);
				}
			};
			loop();
		}

		function stop() {
			$scope.isActive = false;
		}

		$scope.changeCellState = function(row, col) {
			if (!$scope.isActive) {
				$scope.selectedBoard = undefined;
				$scope.board.getCell(row, col).toggleIsAlive();
				$scope.gameOver = false;
			}
		};

		$scope.resetBoard = function() {
			$scope.selectedBoard = undefined;
			$scope.board.reset();
			$scope.round = 0;
			$scope.gameOver = false;
		};

		$scope.boards = boardService.getBoards();

		$scope.loadBoard($scope.boards[0]);

	}]);
