import { useState } from "react";
import { useRecoilState } from "recoil";
import { todoListState } from "../state/atoms";

const TodoItem = ({ item }) => {
  const [todoList, setTodoList] = useRecoilState(todoListState);

  const currentTodoIndex = todoList.findIndex((listItem) => listItem === item);

  const onDeleteItem = () => {
    const newList = [
      ...todoList.slice(0, currentTodoIndex),
      ...todoList.slice(currentTodoIndex + 1),
    ];
    setTodoList(newList);
  };

  const toggleItemCompletion = () => {
    const newList = replaceItemAtIndex(todoList, currentTodoIndex, {
      ...item,
      isDone: !item.isComplete,
    });

    setTodoList(newList);
  };

  const onEditItem = ({ target: { value } }) => {
    const newList = replaceItemAtIndex(todoList, currentTodoIndex, {
      ...item,
      item: value,
    });

    setTodoList(newList);
  };

  console.log({ todoList });
  return (
    <div>
      <input type="text" value={item.item} onChange={onEditItem} />
      <input
        type="checkbox"
        checked={item.isComplete}
        onChange={toggleItemCompletion}
      />
      <button onClick={onDeleteItem}>Delete</button>
    </div>
  );
};

function replaceItemAtIndex(arr, index, newValue) {
  return [...arr.slice(0, index), newValue, ...arr.slice(index + 1)];
}
export default TodoItem;
