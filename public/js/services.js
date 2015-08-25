angular.module("services")
	.factory("boardService", ["matrixGenerator", function(matrixGenerator) {
		return {
			createBoard: function(dim) {
				return matrixGenerator.createMatrix(dim, function() {
					return false;
				});
			},

			resetBoard: function(board) {
				var row;
				var col;
				for (row = 0; row < board.length; row++) {
					for (col = 0; col < board.length; col++) {
						board[row][col] = false;
					}
				}
				return board;
			},

			allCellsAreDead: function(board) {
				var row;
				var col;
				for (row = 0; row < board.length; row++) {
					for (col = 0; col < board.length; col++) {
						if (board[row][col] == true) {
							return false;
						}
					}
				}
				return true;
			},

			getNext: function(board) {
				var row;
				var col;
				var next = this.createBoard(board.length);
				for (row = 0; row < board.length; row++) {
					for (col = 0; col < board.length; col++) {
						var numNeighbors = this.getNumberOfNeighbors(board, row, col);
						var cellSurvives = this.cellSurvives(board[row][col], numNeighbors);
						next[row][col] = cellSurvives;
					}
				}
				return next;
			},

			getNumberOfNeighbors: function(board, row, col) {
				var numNeighbors = 0;
				var i;
				var j;

				for (i = row - 1; i <= row + 1; i++) {
					for (j = col - 1; j <= col + 1; j++) {
						if (i != row || j != col) {
							numNeighbors += this.getState(board, i, j);
						}
					}
				}
				return numNeighbors;
			},

			getState: function(board, row, col) {
				row = this.validateIndex(row, board);
				col = this.validateIndex(col, board);
				return board[row][col] ? 1 : 0;
			},

			validateIndex: function(index, board) {
				if (index >= board.length) {
					return 0;
				}
				if (index < 0) {
					return board.length - 1;
				}
				return index;

			},

			cellSurvives: function(isAlive, numNeighbors) {
				if (numNeighbors === 3) {
					return true;
				}
				if (numNeighbors === 2) {
					return isAlive;
				}
				return false;
			}

		};

	}]);
