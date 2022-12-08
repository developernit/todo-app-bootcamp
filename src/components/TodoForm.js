import { useState } from "react";
import { useTodoContext } from "../providers/TodoProvider";

const TodoForm = () => {
  const { getNumberOfTodo, addTodo } = useTodoContext();
  const [todoItem, setTodoItem] = useState("");
  const onChangeFunction = (event) => {
    setTodoItem(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!todoItem) {
      return;
    }
    addTodo(todoItem);
    setTodoItem("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Number of Todos: {getNumberOfTodo()} </h3>
      <input
        type="text"
        value={todoItem}
        placeholder="Write here"
        onChange={onChangeFunction}
      />
      <button type="submit"> Submit </button>
    </form>
  );
};

export default TodoForm;
