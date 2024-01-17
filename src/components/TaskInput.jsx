import { useState } from "react";

function TaskInput({ list }) {
  const [task, setTask] = useState("Enter task");
  const [date, setDate] = useState(new Date());

  const handleTitleChange = (e) => {
    setTask(e.target.value);
  };

  const handleDate = (e) => {
    const newDate = new Date(e.target.value);
    setDate(newDate);
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
    list.push({ task: task, date: date.toDateString() });
    console.log("Task added");
    console.log(list);
    setTask("Add Task");
    setDate(new Date());
  };

  return (
    <>
      <div>
        <form onSubmit={handleFormSubmit}>
          <label htmlFor="task">Task</label>
          <input type="text" onChange={handleTitleChange} value={task} />
          <label htmlFor="task">Date</label>
          <input type="Date" onChange={handleDate} value={date} />
          <button type="submit">Add Task</button>
        </form>
      </div>
      <div>
        <h2>{task}</h2>
        <h3>{date.toDateString()}</h3>
      </div>
    </>
  );
}

export default TaskInput;
