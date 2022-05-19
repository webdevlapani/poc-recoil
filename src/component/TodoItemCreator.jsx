import { useState } from "react";
import { useSetRecoilState } from "recoil";
import { todoListState } from "../state/atoms";

const TodoItemCreator = () => {
  const [inputValue, setInputValue] = useState("");
  const setTodoList = useSetRecoilState(todoListState);

  const onChange = ({ target: { value } }) => {
    setInputValue(value);
  };

  const addItem = () => {
    setTodoList((preState) => [
      ...preState,
      {
        id: Math.floor(Math.random() * 100000),
        item: inputValue,
        isDone: false,
      },
    ]);
    setInputValue("");
  };

  return (
    <div>
      <input type="text" value={inputValue} onChange={onChange} />
      <button onClick={addItem}>Add</button>
    </div>
  );
};

export default TodoItemCreator;
