import React from "react";
import { Sidebar } from "../common/Sidebar";
import { Topbar } from "../common/Topbar";
import { CodeBlock } from "./Codeblock";

const MainComponent = () => {
  return (
    <div className="main">
      <CodeBlock />
    </div>
  );
};

export const Main = React.memo(MainComponent);
