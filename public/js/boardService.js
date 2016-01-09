angular.module("services")

.factory("boardService", ["boardGenerator", function(boardGenerator) {
	return {
		getBoards: function() {
			return [{
				title: "Blinker",
				createBoard: function() {
					var board = boardGenerator.generateBoard(5);
					board.getCell(2, 1).isAlive = true;
					board.getCell(2, 2).isAlive = true;
					board.getCell(2, 3).isAlive = true;
					return board;
				}
			}, {
				title: "Pulsar",
				createBoard: function() {
					var board = boardGenerator.generateBoard(17);
					board.getCell(2, 4).isAlive = true;
					board.getCell(2, 5).isAlive = true;
					board.getCell(2, 6).isAlive = true;
					board.getCell(2, 10).isAlive = true;
					board.getCell(2, 11).isAlive = true;
					board.getCell(2, 12).isAlive = true;

					board.getCell(4, 2).isAlive = true;
					board.getCell(4, 7).isAlive = true;
					board.getCell(4, 9).isAlive = true;
					board.getCell(4, 14).isAlive = true;

					board.getCell(5, 2).isAlive = true;
					board.getCell(5, 7).isAlive = true;
					board.getCell(5, 9).isAlive = true;
					board.getCell(5, 14).isAlive = true;

					board.getCell(6, 2).isAlive = true;
					board.getCell(6, 7).isAlive = true;
					board.getCell(6, 9).isAlive = true;
					board.getCell(6, 14).isAlive = true;

					board.getCell(7, 4).isAlive = true;
					board.getCell(7, 5).isAlive = true;
					board.getCell(7, 6).isAlive = true;
					board.getCell(7, 10).isAlive = true;
					board.getCell(7, 11).isAlive = true;
					board.getCell(7, 12).isAlive = true;

					board.getCell(9, 4).isAlive = true;
					board.getCell(9, 5).isAlive = true;
					board.getCell(9, 6).isAlive = true;
					board.getCell(9, 10).isAlive = true;
					board.getCell(9, 11).isAlive = true;
					board.getCell(9, 12).isAlive = true;

					board.getCell(10, 2).isAlive = true;
					board.getCell(10, 7).isAlive = true;
					board.getCell(10, 9).isAlive = true;
					board.getCell(10, 14).isAlive = true;

					board.getCell(11, 2).isAlive = true;
					board.getCell(11, 7).isAlive = true;
					board.getCell(11, 9).isAlive = true;
					board.getCell(11, 14).isAlive = true;

					board.getCell(12, 2).isAlive = true;
					board.getCell(12, 7).isAlive = true;
					board.getCell(12, 9).isAlive = true;
					board.getCell(12, 14).isAlive = true;

					board.getCell(14, 4).isAlive = true;
					board.getCell(14, 5).isAlive = true;
					board.getCell(14, 6).isAlive = true;
					board.getCell(14, 10).isAlive = true;
					board.getCell(14, 11).isAlive = true;
					board.getCell(14, 12).isAlive = true;
					return board;
				}
			}, {
				title: "Glider",
				createBoard: function() {
					var board = boardGenerator.generateBoard(10);
					board.getCell(0, 0).isAlive = true;
					board.getCell(1, 1).isAlive = true;
					board.getCell(1, 2).isAlive = true;
					board.getCell(2, 0).isAlive = true;
					board.getCell(2, 1).isAlive = true;
					return board;
				}
			}, {
				title: "Lightweight spaceship (LWSS)",
				createBoard: function() {
					var board = boardGenerator.generateBoard(10);
					board.getCell(1, 3).isAlive = true;
					board.getCell(1, 6).isAlive = true;

					board.getCell(2, 2).isAlive = true;

					board.getCell(3, 2).isAlive = true;
					board.getCell(3, 6).isAlive = true;

					board.getCell(4, 2).isAlive = true;
					board.getCell(4, 3).isAlive = true;
					board.getCell(4, 4).isAlive = true;
					board.getCell(4, 5).isAlive = true;
					return board;
				}
			}, {
				title: "David Eppstein's weekender",
				createBoard: function() {
					var board = boardGenerator.generateBoard(20);
					board.getCell(2, 2).isAlive = true;
					board.getCell(2, 3).isAlive = true;
					board.getCell(2, 4).isAlive = true;
					board.getCell(2, 15).isAlive = true;
					board.getCell(2, 16).isAlive = true;
					board.getCell(2, 17).isAlive = true;

					board.getCell(3, 2).isAlive = true;
					board.getCell(3, 4).isAlive = true;
					board.getCell(3, 15).isAlive = true;
					board.getCell(3, 17).isAlive = true;

					board.getCell(4, 2).isAlive = true;
					board.getCell(4, 3).isAlive = true;
					board.getCell(4, 4).isAlive = true;
					board.getCell(4, 15).isAlive = true;
					board.getCell(4, 16).isAlive = true;
					board.getCell(4, 17).isAlive = true;

					board.getCell(5, 3).isAlive = true;
					board.getCell(5, 4).isAlive = true;
					board.getCell(5, 9).isAlive = true;
					board.getCell(5, 10).isAlive = true;
					board.getCell(5, 15).isAlive = true;
					board.getCell(5, 16).isAlive = true;

					board.getCell(6, 8).isAlive = true;
					board.getCell(6, 11).isAlive = true;

					board.getCell(7, 4).isAlive = true;
					board.getCell(7, 6).isAlive = true;
					board.getCell(7, 13).isAlive = true;
					board.getCell(7, 15).isAlive = true;

					board.getCell(8, 5).isAlive = true;
					board.getCell(8, 6).isAlive = true;
					board.getCell(8, 7).isAlive = true;
					board.getCell(8, 8).isAlive = true;
					board.getCell(8, 9).isAlive = true;
					board.getCell(8, 10).isAlive = true;
					board.getCell(8, 11).isAlive = true;
					board.getCell(8, 12).isAlive = true;
					board.getCell(8, 13).isAlive = true;
					board.getCell(8, 14).isAlive = true;

					board.getCell(9, 7).isAlive = true;
					board.getCell(9, 12).isAlive = true;

					board.getCell(10, 7).isAlive = true;
					board.getCell(10, 12).isAlive = true;

					board.getCell(11, 7).isAlive = true;
					board.getCell(11, 12).isAlive = true;
					return board;
				}
			}, {
				title: "Empty Small",
				createBoard: function() {
					return boardGenerator.generateBoard(5);
				}
			}, {
				title: "Empty Large",
				createBoard: function() {
					return boardGenerator.generateBoard(10);
				}
			}];
		}
	};

}]);
