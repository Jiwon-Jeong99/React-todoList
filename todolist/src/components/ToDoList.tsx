import { useForm } from "react-hook-form";
import { atom, useRecoilState, useRecoilValue } from "recoil";
import { toDoState } from "../atoms";
import CreateToDo from "./CreateToDo";
import ToDo from "./ToDo";

function ToDoList() {
  // 입력해서 atom에 저장된 값을 가져오기만 하면 됨
  const toDos = useRecoilValue(toDoState);
  console.log(toDos);
  return (
    <div>
      <h1>To Dos</h1>
      <CreateToDo />
      <ul>
        {toDos.map((toDo) => (
          <ToDo key={toDo.id} {...toDo} />
          // <ToDo text={toDo.text} category={toDo.category} id={toDo.id} />
        ))}
      </ul>
    </div>
  );
}

export default ToDoList;
