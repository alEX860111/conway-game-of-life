angular.module("game")
.factory("survives", [function() {
	return function survives(state, numAliveNeighbors) {
		if (numAliveNeighbors === 3) {
			return true;
		}
		if (numAliveNeighbors === 2) {
			return state
		}
		return false;
	};
}]);
