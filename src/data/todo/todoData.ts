const notStartedTodoList = [
  {
    date: "13-07-2021",
    todoList: [
      `Quick Sort (Only Understanding)`,
      `3-Way QuickSort (Dutch National Flag) (Only Understanding)`,
      `Iterative Quick Sort (Only Understanding)`,
      `Merge Sort (Only Understanding)`,
      `Iterative Merge Sort (Only Understanding)`,
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
    todoList: [
      `Linear Search (Only Understanding)`,
      `Binary Search (Only Understanding)`,
      `Bubble Sort (Only Understanding)`,
      `Recursive Bubble Sort (Only Understanding)`,
      `Selection Sort (Only Understanding)`,
      `Insertion Sort (Only Understanding)`,
      `Recursive Insertion Sort (Only Understanding)`,
    ],
  },
];

const completedTodoList = [
  {
    date: "13-07-2021",
    todoList: [],
  },
];

export const todoData = { notStarted: notStartedTodoList, inProgress: inProgressTodoList, completed: completedTodoList };
