angular.module("myapp", ["services"])
	.controller("gameCtrl", ["$scope", "$timeout", "boardService", function($scope, $timeout, boardService) {
		$scope.gameOver = false;
		$scope.isActive = false;
		$scope.round = 0;

		$scope.minUpdateInterval = 100;
		$scope.maxUpdateInterval = 2000;
		$scope.stepUpdateInterval = 100;
		$scope.updateInterval = 1000;

		$scope.$watch("isActive", function() {
			$scope.buttonValue = $scope.isActive ? "Pause" : "Play";
		});

		$scope.loadBoard = function() {
			$scope.board = $scope.selectedBoard.createBoard();
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
				$scope.board.getCell(row, col).toggleIsAlive();
				$scope.gameOver = false;
			}
		};

		$scope.resetBoard = function() {
			$scope.board.reset();
			$scope.round = 0;
			$scope.gameOver = false;
		};

		$scope.boards = boardService.getBoards();

		$scope.selectedBoard = $scope.boards[0];
		$scope.loadBoard();

	}]);
