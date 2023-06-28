import React from "react";
import { CodeBlock } from "../common/Codeblock";
import { TextToVoice } from "../common/TextToVoice";
import { VoiceToText } from "../common/VoiceToText";
import { Accordion } from "../common/Accordion";
import { Content } from "../common/Content";
import { Content2 } from "../common/Content2";
import { UncheckList } from "../common/UncheckList";
import { CheckList } from "../common/CheckList";

const HomeComponent = () => {
  return (
    <>
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
      <UncheckList>Hello 1</UncheckList>
      <UncheckList>Hello 2</UncheckList>
      <UncheckList>Hello 3</UncheckList>
      <CheckList>Hello 1</CheckList>
      <CheckList>Hello 2</CheckList>
      <CheckList>Hello 3</CheckList>
    </>
  );
};

export const Home = React.memo(HomeComponent);
