angular.module("services")

.factory("boardService", ["boardGenerator", function(boardGenerator) {
	return {
		getBoards: function() {
			return [{
				id: 0,
				title: "EMPTY 2x2",
				createBoard: function() {
					return boardGenerator.generateBoard(2);
				}
			}, {
				id: 1,
				title: "EMPTY 3x3",
				createBoard: function() {
					return boardGenerator.generateBoard(3);
				}
			}, {
				id: 2,
				title: "EMPTY 4x4",
				createBoard: function() {
					return boardGenerator.generateBoard(4);
				}
			}, {
				id: 3,
				title: "EMPTY 5x5",
				createBoard: function() {
					return boardGenerator.generateBoard(5);
				}
			}, {
				id: 4,
				title: "EMPTY 6x6",
				createBoard: function() {
					return boardGenerator.generateBoard(6);
				}
			}, {
				id: 5,
				title: "EMPTY 7x7",
				createBoard: function() {
					return boardGenerator.generateBoard(7);
				}
			}, {
				id: 6,
				title: "EMPTY 8x8",
				createBoard: function() {
					return boardGenerator.generateBoard(8);
				}
			}, {
				id: 7,
				title: "EMPTY 9x9",
				createBoard: function() {
					return boardGenerator.generateBoard(9);
				}
			}, {
				id: 8,
				title: "EMPTY 10x10",
				createBoard: function() {
					return boardGenerator.generateBoard(10);
				}
			}, {
				id: 9,
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
				id: 10,
				title: "Blinker",
				createBoard: function() {
					var board = boardGenerator.generateBoard(5);
					board.getCell(2, 1).isAlive = true;
					board.getCell(2, 2).isAlive = true;
					board.getCell(2, 3).isAlive = true;
					return board;
				}
			}, {
				id: 11,
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
			}];
		}
	};

}]);
