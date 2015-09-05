angular.module("services")
	.factory("cellGenerator", function() {
		return {
			generateCell: function() {
				return {
					isAlive: false,
					survives: function(numAliveNeighbors) {
						if (numAliveNeighbors === 3) {
							return true;
						}
						if (numAliveNeighbors === 2) {
							return this.isAlive;
						}
						return false;
					}

				};
			}
		};
	});
