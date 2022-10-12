import { atom, selector } from "recoil";

//enum은 사실...인덱스를....값으로 표현해주는 그런 거였다..
//TO_DO는 사실 숫자 0임
export enum Categories {
  "TO_DO"="TO_DO",
  "DOING"="DOING",
  "DONE"="DONE",
}

export interface IToDo {
  text: string;
  id: number;
  category?: Categories;
}

//사용자가 현재 선택한 카테고리 저장
export const categoryState = atom({
  key: "category",
  default: Categories.TO_DO,
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
    const category = get(categoryState);
    return toDos.filter((toDo) => toDo.category === category);
  },
});
