import React from "react";

export const Task = ({ task, toggleCompleted, deleteTask }) => {
  return (
    <div className="task-item  flex justify-between h-15.5 w-86.25 items-center rounded-md ">
      <div className="flex items-center gap-3 bg-[#f9FAFB] p-4">
        <input
          type="checkbox"
          checked={task.isCompleted}
          className="h-5 w-5"
          onChange={() => toggleCompleted(task.id)}
        />

        <span className={task.isCompleted ? "completed" : ""}>{task.text}</span>
      </div>

      <button
        onClick={() => deleteTask(task.id)}
        className="delete-btn  text-[#EF4444] h-7.5 py-1.5 px-3 rounded-md bg-[#FEF2F2] flex items-center justify-center hover:truncate"
      >
        Delete
      </button>
    </div>
  );
};
