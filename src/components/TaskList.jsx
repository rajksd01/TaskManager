import React from "react";

function TaskList({ list }) {
  return (
    <div>
      {list.map((task) => {
        return (
          <div key={task.taskId}>
            <h2>{task.task}</h2>
            <p>{task.date}</p>
          </div>
        );
      })}
    </div>
  );
}

export default TaskList;
