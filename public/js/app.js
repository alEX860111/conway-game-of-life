angular.module("myapp", ["services"])
	.controller("gameCtrl", function($scope, $interval, boardGenerator) {
		$scope.boardSize = 5;

		var promise;

		$scope.gameOver = false;
		$scope.isActive = false;
		$scope.round = 0;

		$scope.$watch("isActive", function() {
			$scope.buttonValue = $scope.isActive ? "Pause" : "Play";
		});

		$scope.$watch("boardSize", function() {
			$scope.board = boardGenerator.generateBoard($scope.boardSize);
			$scope.indices = _.range($scope.boardSize);
			$scope.round = 0;
			$scope.gameOver = false;
		});

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
			promise = $interval(function() {
				$scope.board = $scope.board.getNext();
				$scope.round++;
				$scope.gameOver = $scope.board.areAllCellsDead();
			}, 2000);
			$scope.isActive = true;
			$scope.gameOver = false;
		}

		function stop() {
			$interval.cancel(promise);
			$scope.isActive = false;
		}

		$scope.changeCellState = function(row, col) {
			var cell;
			if (!$scope.isActive) {
				$scope.gameOver = false;
				cell = $scope.board.getCell(row, col);
				cell.isAlive = !cell.isAlive;
			}
		};

		$scope.resetBoard = function() {
			$scope.board.reset();
			$scope.round = 0;
			$scope.gameOver = false;
		};

	});
