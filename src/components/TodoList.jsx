import { useContext } from "react";
import { TodoContext } from "./TodoContext";

const TodoList = () => {
  const { todos, deleteTodo } = useContext(TodoContext);

  const handleDelete = (index) => {
    deleteTodo(index);
  };

  return (
    <ul className="w-full max-w-150">
      {todos.map((todo, index) => (
        <li className="bg-[#202020] flex items-center justify-between rounded-xl h-fit py-4 px-5 mt-5 " key={index}>
          <label class="text-xl flex gap-5 items-center grow cursor-pointer">
            <input type="checkbox" name="checkbox" id="checkbox" className="peer" />
            <span className="peer-checked:line-through">{todo}</span>
          </label>
          <div className="flex gap-5 items-center ">
            <button className="bg-[#7D0A0A] px-4 py-2 rounded-xl cursor-pointer" onClick={() => handleDelete(index)}>
              Delete
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
