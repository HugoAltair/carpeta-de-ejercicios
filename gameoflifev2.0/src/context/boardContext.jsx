import { createContext, useEffect, useState } from "react";
import {
  countAliveCells,
  makeEmptyArray,
  makeGrid,
  setBlinker,
} from "../components/MakeGrid";

const BoardContext = createContext();
export default BoardContext;
const colm = 10;
const rows = 10;
const width = 500;
const height = 500;
export function BoardProvider({ children }) {
  const [board, setBoard] = useState(null);

  function cellRules(alive, cellsAround) {
    if (alive === 0 && cellsAround === 3) {
      return 1;
    } else if (alive === 1 && (cellsAround > 3 || cellsAround < 2)) {
      return 0;
    } else {
      return alive;
    }
  }
  function generateNextIteration() {
    // console.log(board);
    if (board) {
      let newEmptyArray = makeEmptyArray(colm, rows);
      for (let i = 0; i < colm; i++) {
        for (let j = 0; j < rows; j++) {
          let cellsAround = countAliveCells(board, i, j, colm, rows);
          newEmptyArray[i][j] = cellRules(board[i][j], cellsAround);
        }
      }
      //console.log(board);

      return newEmptyArray;
    }
  }

  return (
    <BoardContext.Provider
      value={{
        board,
        setBoard,
        generateNextIteration,
        colm,
        rows,
        width,
        height,
      }}
    >
      {children}
    </BoardContext.Provider>
  );
}
