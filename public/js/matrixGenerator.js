angular.module("services")
	.factory("matrixGenerator", ["arrayGenerator", function(arrayGenerator) {
		return {
			generateMatrix: function(size, createElement) {

				var rows = arrayGenerator.generateArray(size, function() {
					return arrayGenerator.generateArray(size, createElement);
				});

				function confineIndex(idx) {
					if (idx >= size) {
						return 0;
					}
					if (idx < 0) {
						return size - 1;
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
