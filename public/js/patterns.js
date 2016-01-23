angular.module("game")

.factory("patterns", [function() {
	return [{
		title: "Blinker",
		rows: [
			[false, false, false, false, false],
			[false, false, true, false, false],
			[false, false, true, false, false],
			[false, false, true, false, false],
			[false, false, false, false, false]
		]
	}, {
		title: "Pulsar",
		rows: [
			[false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
			[false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
			[false, false, false, false, true, true, true, false, false, false, true, true, true, false, false, false, false],
			[false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
			[false, false, true, false, false, false, false, true, false, true, false, false, false, false, true, false, false],
			[false, false, true, false, false, false, false, true, false, true, false, false, false, false, true, false, false],
			[false, false, true, false, false, false, false, true, false, true, false, false, false, false, true, false, false],
			[false, false, false, false, true, true, true, false, false, false, true, true, true, false, false, false, false],
			[false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
			[false, false, false, false, true, true, true, false, false, false, true, true, true, false, false, false, false],
			[false, false, true, false, false, false, false, true, false, true, false, false, false, false, true, false, false],
			[false, false, true, false, false, false, false, true, false, true, false, false, false, false, true, false, false],
			[false, false, true, false, false, false, false, true, false, true, false, false, false, false, true, false, false],
			[false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
			[false, false, false, false, true, true, true, false, false, false, true, true, true, false, false, false, false],
			[false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
			[false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false]
		]
	}, {
		title: "Glider",
		rows: [
			[true, false, false, false, false, false, false, false, false, false],
			[false, true, true, false, false, false, false, false, false, false],
			[true, true, false, false, false, false, false, false, false, false],
			[false, false, false, false, false, false, false, false, false, false],
			[false, false, false, false, false, false, false, false, false, false],
			[false, false, false, false, false, false, false, false, false, false],
			[false, false, false, false, false, false, false, false, false, false],
			[false, false, false, false, false, false, false, false, false, false],
			[false, false, false, false, false, false, false, false, false, false],
			[false, false, false, false, false, false, false, false, false, false],
		]
	}, {
		title: "Lightweight spaceship (LWSS)",
		rows: [
			[false, false, false, false, false, false, false, false, false, false],
			[false, false, false, true, false, false, true, false, false, false],
			[false, false, true, false, false, false, false, false, false, false],
			[false, false, true, false, false, false, true, false, false, false],
			[false, false, true, true, true, true, false, false, false, false],
			[false, false, false, false, false, false, false, false, false, false],
			[false, false, false, false, false, false, false, false, false, false],
			[false, false, false, false, false, false, false, false, false, false],
			[false, false, false, false, false, false, false, false, false, false],
			[false, false, false, false, false, false, false, false, false, false],
		]
	}, {
		title: "David Eppstein's weekender",
		rows: [
			[false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
			[false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
			[false, false, true, true, true, false, false, false, false, false, false, false, false, false, false, true, true, true, false, false],
			[false, false, true, false, true, false, false, false, false, false, false, false, false, false, false, true, false, true, false, false],
			[false, false, true, true, true, false, false, false, false, false, false, false, false, false, false, true, true, true, false, false],
			[false, false, false, true, true, false, false, false, false, true, true, false, false, false, false, true, true, false, false, false],
			[false, false, false, false, false, false, false, false, true, false, false, true, false, false, false, false, false, false, false, false],
			[false, false, false, false, true, false, true, false, false, false, false, false, false, true, false, true, false, false, false, false],
			[false, false, false, false, false, true, true, true, true, true, true, true, true, true, true, false, false, false, false, false],
			[false, false, false, false, false, false, false, true, false, false, false, false, true, false, false, false, false, false, false, false],
			[false, false, false, false, false, false, false, true, false, false, false, false, true, false, false, false, false, false, false, false],
			[false, false, false, false, false, false, false, true, false, false, false, false, true, false, false, false, false, false, false, false],
			[false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
			[false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
			[false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
			[false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
			[false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
			[false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
			[false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
			[false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false]
		]
	}];
}]);
