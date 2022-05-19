import { RecoilRoot } from "recoil";
import TodoList from "./component/TodoList";

function App() {
  return (
    <RecoilRoot>
      <h1>Recoil POC</h1>
      <TodoList />
    </RecoilRoot>
  );
}

export default App;
