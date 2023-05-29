import { css, html, javascript, typescript } from "./frontend";

const cheatsheets = {
  view: "FRONTEND_CHEATSHEET",
  outer: "Frontend",
  inner: [html, css, javascript, typescript],
};

const roadmaps = {};

const routine = {};

const office = {};

export const sidebarData = () => {
  return [cheatsheets];
};
