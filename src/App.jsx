import TaskInput from "./components/TaskInput";

function App() {
  const taskList = [];

  return (
    <>
      Hello From App
      <TaskInput list={taskList} />;
    </>
  );
}

export default App;
