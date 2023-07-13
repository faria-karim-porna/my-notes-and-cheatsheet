const notStartedTodoList = [
  {
    date: "13-07-2021",
    todoList: [
      `Linear Search (Only Understanding)`,
      `Binary Search (Only Understanding)`,
      `Sorting (Only Understanding)`,
      `Array (Only Understanding)`,
      `String (Only Understanding)`,
      `Sliding Window (Only Understanding)`,
      `Two Pointers (Only Understanding)`,
      `Linked List (Only Understanding)`,
      `Stack (Only Understanding)`,
      `Queue (Only Understanding)`,
      `Complete All Behavioral Interview Questions (With Tips And Tricks)`,
      `Complete All Company Related Interview Questions (With Tips And Tricks)`,
      `JavaScript (Tough Questions Only)`,
      `React.js (Hooks, Life Cycle)`,
    ],
  },
];

const inProgressTodoList = [
  {
    date: "13-07-2021",
    todoList: [],
  },
];

const completedTodoList = [
  {
    date: "13-07-2021",
    todoList: [],
  },
];

export const todoData = { notStarted: notStartedTodoList, inProgress: inProgressTodoList, completed: completedTodoList };
