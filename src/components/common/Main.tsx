import React from "react";
import { Sidebar } from "../common/Sidebar";
import { Topbar } from "../common/Topbar";
import { CodeBlock } from "./Codeblock";
import { TextToVoice } from "./TextToVoice";
import { VoiceToText } from "./VoiceToText";
import { Accordion } from "./Accordion";
import { Content } from "./Content";
import { Content2 } from "./Content2";

const MainComponent = () => {
  return (
    <div className="main">
      <CodeBlock language={"javascript"}>
        {`function helloWorld(){
    console.log("hello world 2023");
  }`}
      </CodeBlock>
      <CodeBlock language={"html"}>{`<div>hello world</div>`}</CodeBlock>
      <TextToVoice className="que-voice" text="What is your name?" shouldAlwaysView={true} />
      <TextToVoice className="ans-voice" text="Hello this is Faria Karim Porna." />
      <VoiceToText />

      <Accordion outer="hello world">
        <CodeBlock language={"js"}>{`console.log("hello world")`}</CodeBlock>
      </Accordion>
      <Accordion outer="world">
        <div>Nothing Nothing</div>
      </Accordion>
      <Content />
      <Content2 />
    </div>
  );
};

export const Main = React.memo(MainComponent);
