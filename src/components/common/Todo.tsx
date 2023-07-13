import React, { useState } from "react";
import Speech from "react-speech";

const TodoComponent = () => {
  return (
    <>
      <div className="todo-list">
        <div>
          <div>Not Started</div>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((data) => (
            <div className="todo-task">{data}</div>
          ))}
        </div>
        <div>
          <div>In Progress</div>
          {[1, 2, 3, 4, 5].map((data) => (
            <div className="todo-task">{data}</div>
          ))}
        </div>
        <div>
          <div>Completed</div>
          {[1, 2, 3, 4, 5, 6, 7].map((data) => (
            <div className="todo-task">{data}</div>
          ))}
        </div>
      </div>
    </>
  );
};

export const Todo = React.memo(TodoComponent);
