import { createContext, useContext, useState } from "react";

const TodoContext = createContext();
const initialValue = ["Learning"];
const TodoProvider = ({ children }) => {
  const [todoList, setTodoList] = useState(initialValue);

  const getNumberOfTodo = () => todoList.length;

  const addTodo = (newTodoItem) => {
    setTodoList([...todoList, newTodoItem]);
  };

  const removeTodo = (todoIndex) => {
    const newList = todoList.filter((_, index) => index !== todoIndex);
    setTodoList(newList);
  };

  const contextValue = {
    todoList,
    getNumberOfTodo,
    addTodo,
    removeTodo,
  };

  return (
    <TodoContext.Provider value={contextValue}>{children}</TodoContext.Provider>
  );
};

// custom useTodoContext hook that utilizes useContext hook
export const useTodoContext = () => useContext(TodoContext);
export default TodoProvider;
