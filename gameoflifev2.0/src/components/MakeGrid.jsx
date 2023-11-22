export function makeGrid(colm, rows) {
  let arr = new Array(colm);
  for (let i = 0; i < arr.length; i++) {
    arr[i] = new Array(rows);
    for (let j = 0; j < arr.length; j++) {
      arr[i][j] = randomNumber();
    }
  }
  return arr;
}
export function makeEmptyArray(colm, rows) {
  let arr = new Array(colm);
  for (let i = 0; i < arr.length; i++) {
    arr[i] = new Array(rows);
  }
  return arr;
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
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [1, 1, 1, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  ];
}
