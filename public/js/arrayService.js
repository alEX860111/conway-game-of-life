angular.module("services", [])
	.factory("arrayService", [function() {
		return {
			createArray: function(dim, getValue) {
				var array = [];
				_.times(dim, function() {
					array.push(getValue());
				});
				return array;
			},
			createMatrix: function(dim, getValue) {
				var that = this;
				return that.createArray(dim, function() {
					return that.createArray(dim, getValue);
				});
			}
		};
	}]);
