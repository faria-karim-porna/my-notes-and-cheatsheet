import React from "react";
import { Sidebar } from "../common/Sidebar";
import { Topbar } from "../common/Topbar";
import { CodeBlock } from "./Codeblock";
import { TextToVoice } from "./TextToVoice";

const MainComponent = () => {
  return (
    <div className="main">
      <CodeBlock />
      <TextToVoice className="que-voice" text="What is your name?" />
      <TextToVoice className="ans-voice" text="Hello this is Faria Karim Porna." />
    </div>
  );
};

export const Main = React.memo(MainComponent);
