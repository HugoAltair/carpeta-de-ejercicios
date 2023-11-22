const tileW = 40;
const tileH = 40;
const gridRows = 10;
const gridCols = 10;
function makeGrid(gridCols, gridRows) {
  let arr = new Array(gridCols);
  for (let i = 0; i < arr.length; i++) {
    arr[i] = new Array(gridRows);
  }
  return arr;
}
const drawGrid = () => {
  const canvas = document.getElementById("game");
  if (canvas.getContext) {
    const ctx = canvas.getContext("2d");
    const grid = makeGrid(gridCols, gridRows);
    for (let i = 0; i < gridCols; i++) {
      for (let j = 0; j < gridRows; j++) {
        if (Math.random() * 10 > 5) random = 1;
        else random = 0;
        grid[i][j] = random;
        let x = i * tileH;
        let y = j * tileW;
        if (grid[i][j] === 1) {
          ctx.fillStyle = "rgb(200,0,0)";
          ctx.fillRect = (x, y, tileW, tileH);
        } else {
          ctx.fillStyle = "rgb(0,200,0)";
          ctx.fillRect = (x, y, tileW, tileH);
        }
      }
    }
    return grid;
  }
};
console.table(drawGrid());
const updateAll = () => {
  drawGrid();
  window.requestAnimationFrame(updateAll);
};
window.onload = () => {
  window.requestAnimationFrame(updateAll);
};
