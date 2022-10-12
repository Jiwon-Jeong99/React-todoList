import { atom, selector } from "recoil";

export interface IToDo {
  text: string;
  id: number;
  category?: "TO_DO" | "DOING" | "DONE";
}

//사용자가 현재 선택한 카테고리 저장
export const categoryState = atom({
  key: "category",
  default: "TO_DO",
});

//atom
export const toDoState = atom<IToDo[]>({
  key: "toDo",
  default: [],
});

export const toDoSelector = selector({
  key: "toDoSelector",
  get: ({ get }) => {
    const toDos = get(toDoState);
    const category = get(categoryState)
    if(category === "TO_DO") return toDos.filter((toDo) => toDo.category === "TO_DO")
    if(category === "DOING") return toDos.filter((toDo) => toDo.category === "DOING")
    if(category === "DONE") return toDos.filter((toDo) => toDo.category === "DONE")
  },
});
