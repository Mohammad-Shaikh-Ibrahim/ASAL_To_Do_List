import { TasksProvider } from "./components/TasksContext.jsx";
import Header from "./components/Header.jsx";
import ToDoList from "./components/ToDoList.jsx";

function App() {
  return (
    <TasksProvider>
      <Header />
      <ToDoList />
    </TasksProvider>
  );
}

export default App;
