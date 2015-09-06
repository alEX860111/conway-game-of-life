angular.module("services")

.factory("boardGenerator", ["matrixGenerator", "cellGenerator", function(matrixGenerator, cellGenerator) {
	return {
		generateBoard: function(size) {

			function generateMatrix() {
				return matrixGenerator.generateMatrix(size, cellGenerator.generateCell);
			}

			var matrix = generateMatrix();

			function createBoard(matrix) {

				return {
					getCell: function(rowIdx, colIdx) {
						return matrix.getElement(rowIdx, colIdx);
					},
					reset: function() {
						matrix.visitAllElements(function(cell) {
							cell.isAlive = false;
						});
					},
					areAllCellsDead: function() {
						var result = true;
						matrix.visitAllElements(function(cell) {
							if (cell.isAlive) {
								result = false;
							}
						});
						return result;
					},
					getNext: function() {
						var nextMatrix = generateMatrix();
						matrix.visitAllElements(function(cell, rowIdx, colIdx) {
							var numAliveNeighbors = 0;
							matrix.visitNeighborElements(rowIdx, colIdx, function(cell) {
								if (cell.isAlive) {
									numAliveNeighbors++;
								}
							});
							nextMatrix.getElement(rowIdx, colIdx).isAlive = cell.survives(numAliveNeighbors);
						});
						return createBoard(nextMatrix);
					}
				};

			};

			return createBoard(matrix);
		}
	};

}]);