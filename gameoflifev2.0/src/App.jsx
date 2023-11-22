import { Board } from "./components/Board";
import { BoardProvider } from "./context/boardContext";

function App() {
  return (
    <>
      <BoardProvider>
        <Board />
      </BoardProvider>
    </>
  );
}

export default App;
