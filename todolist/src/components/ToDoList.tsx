import { useForm } from "react-hook-form";
import { atom, useRecoilState, useRecoilValue } from "recoil";
import { Categories, categoryState, toDoState } from "../atoms";
import CreateToDo from "./CreateToDo";
import ToDo from "./ToDo";
import { toDoSelector } from "../atoms";

function ToDoList() {
  //useState() => 변화를 감지하기 위해서
  // 입력해서 atom에 저장된 값을 가져오기만 하면 됨
  // const toDos = useRecoilValue(toDoState);
  // selector에서 get으로 atom을 받아 return한 값을 여기서 console.log해줌
  // 배열 안의 배열
  const toDos = useRecoilValue(toDoSelector);
  const [category, setCategory] = useRecoilState(categoryState);
  const onInput = (event: React.FormEvent<HTMLSelectElement>) => {
    setCategory(event.currentTarget.value as any);
  };
  // console.log(category);
  return (
    <div>
      <h1>To Dos</h1>
      <hr />
      <select value={category} onInput={onInput}>
        <option value={Categories.TO_DO}>To Do</option>
        <option value={Categories.DONE}>Done</option>
        <option value={Categories.DOING}>Doing</option>
      </select>
      <CreateToDo />

      {toDos?.map((toDo) => (
        <ToDo key={toDo.id} {...toDo} />
      ))}
    </div>
  );
}

export default ToDoList;
