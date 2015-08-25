angular.module("services", [])
	.factory("matrixGenerator", [function() {

		function createArray(length, getValue) {
			var array = [];
			_.times(length, function() {
				array.push(getValue());
			});
			return array;
		}

		return {
			createMatrix: function(dim, getValue) {
				return createArray(dim, function() {
					return createArray(dim, getValue);
				});
			}
		};

	}]);
