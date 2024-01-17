import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";

function App() {
  const taskList = [];
  let taskId = 0;

  return (
    <>
      Hello From App
      <TaskInput list={taskList} id={taskId} />;
      <TaskList list={taskList} />
    </>
  );
}

export default App;
