angular.module("game.of.life.core")
	.factory("matrixGenerator", ["arrayGenerator", function(arrayGenerator) {
		return {
			generateMatrix: function(size, createElement) {

				var rows = arrayGenerator.generateArray(size, function() {
					return arrayGenerator.generateArray(size, createElement);
				});

				const MIN_IDX = 0;
				const MAX_IDX = size - 1;

				function confineIndex(idx) {
					if (idx > MAX_IDX) {
						return MIN_IDX;
					}
					if (idx < MIN_IDX) {
						return MAX_IDX;
					}
					return idx;
				}

				return {
					getSize: function() {
						return size
					},
					getElement: function(rowIdx, colIdx) {
						return rows[confineIndex(rowIdx)][confineIndex(colIdx)];
					},
					visitAllElements: function(visitor) {
						rows.forEach(function(row, rowIdx) {
							row.forEach(function(element, colIdx) {
								visitor(element, rowIdx, colIdx);
							});
						});
					},
					visitNeighborElements: function(rowIdx, colIdx, visitor) {
						visitor(this.getElement(rowIdx - 1, colIdx - 1));
						visitor(this.getElement(rowIdx - 1, colIdx));
						visitor(this.getElement(rowIdx - 1, colIdx + 1));

						visitor(this.getElement(rowIdx, colIdx + 1));
						visitor(this.getElement(rowIdx, colIdx - 1));

						visitor(this.getElement(rowIdx + 1, colIdx - 1));
						visitor(this.getElement(rowIdx + 1, colIdx));
						visitor(this.getElement(rowIdx + 1, colIdx + 1));
					}
				};

			}
		};

	}]);
