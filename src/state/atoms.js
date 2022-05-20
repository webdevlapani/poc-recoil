import axios from "axios";
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

export const currentUserState = atom({
  key: 'CurrentUser',
  default: undefined
})

export const userDataState = selector({
  key: 'UserData',
  get : async ({get}) => {
    if (!get(currentUserState)) return
    const data= await axios.get(`https://jsonplaceholder.typicode.com/users/${get(currentUserState)}`).then(res => res.data) 
    return data;
  }
})