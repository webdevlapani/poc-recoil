import { Suspense } from "react";
import { RecoilRoot } from "recoil";
import SelectUser from "./component/SelectUser";
import TodoList from "./component/TodoList";

function App() {
  return (
    <RecoilRoot>
      <h1>Recoil POC</h1>
      <TodoList />
      <Suspense fallback={<div>Loading...</div>}>
        <SelectUser/>
      </Suspense>
    </RecoilRoot>
  );
}

export default App;
