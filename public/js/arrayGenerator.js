angular.module("services", [])
	.factory("arrayGenerator", [function() {
		return {
			generateArray: function(length, getElement) {
				var array = [];
				_.times(length, function() {
					array.push(getElement());
				});
				return array;
			}
		};
	}]);
