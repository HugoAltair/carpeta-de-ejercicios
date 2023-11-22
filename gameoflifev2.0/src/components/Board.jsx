import { useContext, useEffect } from "react";
import { useRef } from "react";
import BoardContext from "../context/boardContext";

export const Board = () => {
  const { board, setBoard, generateNextIteration, colm, rows } =
    useContext(BoardContext);
  const canvasRef = useRef(null);
  function createBoard(ctx, grid) {
    const cellSize = 50;
    const colors = ["#000000", "#FF0000"];
    //drawing the grid
    for (let i = 0; i < colm; i++) {
      for (let j = 0; j < rows; j++) {
        const x = j * cellSize;
        const y = i * cellSize;
        let cellColor = colors[grid[i][j]];
        ctx.fillStyle = cellColor;
        ctx.fillRect(x, y, cellSize, cellSize);
        ctx.strokeRect(x, y, cellSize, cellSize);
      }
    }
  }
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (board) {
      createBoard(ctx, board);
    }
  }, [board]);
  return (
    <canvas
      ref={canvasRef}
      width={500}
      height={500}
      style={{ border: "1px solid #000" }}
    />
  );
};
