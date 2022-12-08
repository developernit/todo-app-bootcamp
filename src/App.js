import TodoList from "../src/components/TodoList";
import TodoForm from "../src/components/TodoForm";
import TodoProvider from "./providers/TodoProvider";
function App() {
  return (
    <div
      className="App"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <header>TODO APP</header>
      <TodoProvider>
        <TodoForm />
        <TodoList />
      </TodoProvider>
    </div>
  );
}

export default App;
