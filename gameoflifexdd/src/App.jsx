import { drawBoard } from "./components/drawBoard";
function makeGrid(colm, rows) {
  let arr = new Array(colm);
  for (let i = 0; i < arr.length; i++) {
    arr[i] = new Array(rows);
  }
  return arr;
}
let grid;
let colm;
let rows;
let resolution = 40;
let random;
function setUp() {
  <canvas id="tutorial" width="400" height="400"></canvas>;
  colm = 400 / resolution;
  rows = 400 / resolution;
  grid = makeGrid(colm, rows);
  for (let i = 0; i < colm; i++) {
    for (let j = 0; j < rows; j++) {
      if (Math.random() * 10 > 5) random = 1;
      else random = 0;
      grid[i][j] = random;
    }
  }
  return grid;
}
setUp();

function App() {
  return (
    <>
      <drawBoard />
    </>
  );
}

export default App;
