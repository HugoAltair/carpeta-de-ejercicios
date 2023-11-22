import { useEffect } from "react";

export const drawBoard = () => {
  useEffect(() => {
    let canvas = document.getElementById("tutorial");
    let ctx = canvas.getContext("2d");
    for (let i = 0; i < colm; i++) {
      for (let j = 0; j < rows; j++) {
        let x = i * resolution;
        let y = j * resolution;
        if (grid[i][j] === 1) {
          ctx.fillStyle = "#ff0000";
        } else {
          ctx.fillStyle = "#00ff00";
        }
        ctx.fillRect(x, y, resolution, resolution);
        ctx.strokeRect(x, y, resolution, resolution);
      }
    }
  }, []);
  return <div>drawBoard</div>;
};
