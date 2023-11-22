import { MyPage } from "./components/MyPage";
import { MyPageContext } from "./components/MyPageContext";

function App() {
  return (
    <>
      <div>
        <h1>React Context API</h1>
      </div>
      <hr />
      <MyPageContext />
      <hr />
      <MyPage />
    </>
  );
}

export default App;
