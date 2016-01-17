angular.module("game.of.life.core", [])
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
