import { atom, selector } from "recoil";
export const todoListState = atom({
  key: "TodoList",
  default: [],
});

export const todoListFilterState = atom({
  key: "TodoListFilter",
  default: "Show All",
});

export const filteredTodoListState = selector({
  key: "FilteredTodoList",
  get: ({ get }) => {
    const filter = get(todoListFilterState);
    const list = get(todoListState);
    debugger;

    switch (filter) {
      case "Show Completed":
        return list.filter((item) => item.isDone);
      case "Show Uncompleted":
        return list.filter((item) => !item.isDone);
      default:
        return list;
    }
  },
});
