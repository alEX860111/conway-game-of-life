angular.module("game", [])
	.factory("gameService", ["survives", function(survives) {
		"use strict";

		function confineIndex(idx, size) {
			const MIN_IDX = 0;
			const MAX_IDX = size - 1;

			if (idx > MAX_IDX) {
				return MIN_IDX;
			}
			if (idx < MIN_IDX) {
				return MAX_IDX;
			}
			return idx;
		}

		function getAliveCount(rows, rowIdx, colIdx, maxRowIdx, maxColIdx) {
			return Number(rows[confineIndex(rowIdx, maxRowIdx)][confineIndex(colIdx, maxColIdx)]);
		}

		return {
			reset: function(rows) {
				for (let rowIdx = 0; rowIdx < rows.length; rowIdx++) {
					let row = rows[rowIdx];
					for (let colIdx = 0; colIdx < row.length; colIdx++) {
						row[colIdx] = false;
					}
				}
			},
			getNext: function(rows, nextRows) {
				var gameOver = true;
				let maxRowIdx = rows.length;
				for (let rowIdx = 0; rowIdx < maxRowIdx; rowIdx++) {
					let row = rows[rowIdx];
					let maxColIdx = row.length;
					for (let colIdx = 0; colIdx < maxColIdx; colIdx++) {
						let numAliveNeighbors = 0;
						numAliveNeighbors += getAliveCount(rows, rowIdx - 1, colIdx - 1, maxRowIdx, maxColIdx);
						numAliveNeighbors += getAliveCount(rows, rowIdx - 1, colIdx, maxRowIdx, maxColIdx);
						numAliveNeighbors += getAliveCount(rows, rowIdx - 1, colIdx + 1, maxRowIdx, maxColIdx);

						numAliveNeighbors += getAliveCount(rows, rowIdx, colIdx - 1, maxRowIdx, maxColIdx);
						numAliveNeighbors += getAliveCount(rows, rowIdx, colIdx + 1, maxRowIdx, maxColIdx);

						numAliveNeighbors += getAliveCount(rows, rowIdx + 1, colIdx - 1, maxRowIdx, maxColIdx);
						numAliveNeighbors += getAliveCount(rows, rowIdx + 1, colIdx, maxRowIdx, maxColIdx);
						numAliveNeighbors += getAliveCount(rows, rowIdx + 1, colIdx + 1, maxRowIdx, maxColIdx);
						var cellSurvives = survives(rows[rowIdx][colIdx], numAliveNeighbors);
						if (cellSurvives) {
							gameOver = false;
						}
						nextRows[rowIdx][colIdx] = cellSurvives;
					}
				}
				return gameOver;
			}
		};

	}]);
