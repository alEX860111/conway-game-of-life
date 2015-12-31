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
				title: "Gosper glider gun",
				createBoard: function() {
					var board = boardGenerator.generateBoard(38);
					board.getCell(1, 25).isAlive = true;

					board.getCell(2, 23).isAlive = true;
					board.getCell(2, 25).isAlive = true;

					board.getCell(3, 13).isAlive = true;
					board.getCell(3, 14).isAlive = true;
					board.getCell(3, 21).isAlive = true;
					board.getCell(3, 22).isAlive = true;
					board.getCell(3, 35).isAlive = true;
					board.getCell(3, 36).isAlive = true;

					board.getCell(4, 12).isAlive = true;
					board.getCell(4, 16).isAlive = true;
					board.getCell(4, 21).isAlive = true;
					board.getCell(4, 22).isAlive = true;
					board.getCell(4, 35).isAlive = true;
					board.getCell(4, 36).isAlive = true;

					board.getCell(5, 1).isAlive = true;
					board.getCell(5, 2).isAlive = true;
					board.getCell(5, 11).isAlive = true;
					board.getCell(5, 17).isAlive = true;
					board.getCell(5, 21).isAlive = true;
					board.getCell(5, 22).isAlive = true;

					board.getCell(6, 1).isAlive = true;
					board.getCell(6, 2).isAlive = true;
					board.getCell(6, 11).isAlive = true;
					board.getCell(6, 15).isAlive = true;
					board.getCell(6, 17).isAlive = true;
					board.getCell(6, 18).isAlive = true;
					board.getCell(6, 23).isAlive = true;
					board.getCell(6, 25).isAlive = true;

					board.getCell(7, 11).isAlive = true;
					board.getCell(7, 17).isAlive = true;
					board.getCell(7, 25).isAlive = true;

					board.getCell(8, 12).isAlive = true;
					board.getCell(8, 16).isAlive = true;

					board.getCell(9, 13).isAlive = true;
					board.getCell(9, 14).isAlive = true;

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
