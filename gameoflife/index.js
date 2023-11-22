let d = document;
let fieldSize = 50;
let htmlElem;
let cells;
let alive = 1,
  dead = 0;
function createField() {
  htmlElem = [];
  cells = [];
  let table = d.getElementById("field");
  //Axis y
  for (let y = 0; y < fieldSize; y++) {
    let tr = d.createElement("tr");
    let tdElem = [];
    cells.push(new Array(fieldSize).fill(dead));
    htmlElem.push(tdElem);
    table.appendChild(tr);
    //axis x
    for (let x = 0; x < fieldSize; x++) {
      let td = d.createElement("td");
      tdElem.push(td);
      tr.appendChild(td);
    }
  }
}
function drawField() {
  for (let y = 0; y < fieldSize; y++) {
    for (let x = 0; x < fieldSize; x++) {
      htmlElem[y][x].setAttribute(
        "class",
        "cell " + (cells[y][x] === 1 ? "filled" : "empty")
      );
    }
  }
}
function countNeibhours(x, y) {
  let count = 0;
  for (let dy = -1; dy <= 1; dy++) {
    for (let dx = -1; dx <= 1; dx++) {
      let nx = (x + dx + fieldSize) % fieldSize;
      let ny = (y + dy + fieldSize) % fieldSize;
      count += cells[ny][nx];
    }
  }
}
function newGeneration() {
  let newCells = [];
  for (let i = 0; i < fieldSize; i++) {
    newCells.push(new Array(fieldSize).fill(dead));
  }
  for (let y = 0; y < fieldSize; y++) {
    for (let x = 0; x < fieldSize; x++) {
      let neibhours = countNeibhours(x, y);
      if (cells[y][x] == dead && neibhours == 3) {
        newCells = alive;
      }
      if (cells[y][x] == alive && (neibhours == 2 || neibhours == 3)) {
        newCells = alive;
      }
    }
  }
  cells = newCells;
  drawField();
}
function init() {
  createField();
  for (let i = 0; i < Math.floor(fieldSize * fieldSize * 0.3); i++) {
    let x, y;
    do {
      x = Math.floor(Math.random() * fieldSize);
      y = Math.floor(Math.random() * fieldSize);
      if (cells[y][x] == dead) {
        cells[y][x] = alive;
        break;
      }
    } while (true);
  }
  drawField();
  setInterval(newGeneration, 100);
}
init();
