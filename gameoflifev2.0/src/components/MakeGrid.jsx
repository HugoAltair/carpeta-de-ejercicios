export function makeGrid(colm, rows) {
  const grid = Array.from({ length: colm }, (row) => {
    return Array.from({ length: rows }, (col) => {
      return randomNumber();
    });
  });
  return grid;
}
export function makeEmptyArray(colm, rows) {
  return Array.from({ length: colm }, (row) => {
    return Array.from({ length: rows }, (col) => {
      return 0;
    });
  });
}
function randomNumber() {
  return Math.floor(Math.random() * 2);
}
export function countAliveCells(grid, x, y, colms, rows) {
  let aliveCells = 0;
  // console.table(grid);
  for (let i = -1; i < 2; i++) {
    for (let j = -1; j < 2; j++) {
      let col = (x + i + colms) % colms;
      let row = (y + j + rows) % rows;
      // console.log(row, col);
      // console.log(grid[col][row]);
      aliveCells += grid[col][row];
    }
  }
  aliveCells -= grid[x][y];
  return aliveCells;
}
export function setBlinker() {
  return [
    [0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [1, 1, 1, 0, 0, 0, 1, 1, 1, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  ];
}
