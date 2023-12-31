import { useContext, useEffect } from "react";
import { useRef } from "react";
import BoardContext from "../context/boardContext";
import { makeGrid, setBlinker } from "./MakeGrid";

export const Board = () => {
  const {
    board,
    setBoard,
    generateNextIteration,
    colm,
    rows,
    width,
    height,
    cellSize,
  } = useContext(BoardContext);
  const canvasRef = useRef(null);
  function createBoard(ctx, grid) {
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
    //   // create a random grid in the first run

    //let grid = makeGrid(colm, rows);
    let grid = makeGrid(colm, rows);
    setBoard(grid);
    console.log(grid);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (board) {
      createBoard(ctx, board);
    }
    let interval = setInterval(() => {
      let newGrid = generateNextIteration();
      setBoard(newGrid);
      // console.log(newGrid);
    }, 500);
    //after the redrawing face,
    return () => {
      clearInterval(interval);
    };
  }, [board]);

  return (
    <canvas
      ref={canvasRef}
      width={width}
      height={height}
      style={{ border: "1px solid #000" }}
    />
  );
};
