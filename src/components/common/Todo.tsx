import React, { useState } from "react";
import { Accordion } from "./Accordion";
import { todoData } from "../../data/todo/todoData";

const TodoComponent = () => {
  const data = todoData;
  const { notStarted, inProgress, completed } = data;
  return (
    <>
      <div className="todo-list">
        <div>
          <div>Not Started</div>
          {notStarted.map((nsData) => (
            <Accordion outer={nsData.date}>
              {nsData.todoList.map((data) => (
                <div className="todo-task">{data}</div>
              ))}
            </Accordion>
          ))}
        </div>
        <div>
          <div>In Progress</div>
          {inProgress.map((ipData) => (
            <Accordion outer={ipData.date}>
              {ipData.todoList.map((data) => (
                <div className="todo-task">{data}</div>
              ))}
            </Accordion>
          ))}
        </div>
        <div>
          <div>Completed</div>
          {completed.map((cData) => (
            <Accordion outer={cData.date}>
              {cData.todoList.map((data) => (
                <div className="todo-task">{data}</div>
              ))}
            </Accordion>
          ))}
        </div>
      </div>
    </>
  );
};

export const Todo = React.memo(TodoComponent);
