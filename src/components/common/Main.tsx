import React from "react";
import { Sidebar } from "../common/Sidebar";
import { Topbar } from "../common/Topbar";

const MainComponent = () => {
  return <div className="main">main</div>;
};

export const Main = React.memo(MainComponent);
