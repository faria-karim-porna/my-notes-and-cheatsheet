import React from "react";
import { CodeBlock } from "../common/Codeblock";
import { TextToVoice } from "../common/TextToVoice";
import { VoiceToText } from "../common/VoiceToText";
import { Accordion } from "../common/Accordion";
import { Content } from "../common/Content";
import { Content2 } from "../common/Content2";
import { UncheckList } from "../common/UncheckList";
import { CheckList } from "../common/CheckList";
import { Tags } from "../common/Tags";
import { Block } from "../common/Block";

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
      <UncheckList>
        <div>hello 1</div>
        <div>hello 2</div>
        <div>hello 3</div>
      </UncheckList>
      <CheckList>
        <div>hello 1</div>
        <div>hello 2</div>
        <div>hello 3</div>
      </CheckList>
      <Tags>Not Started</Tags>
      <Tags>Progress</Tags>
      <Tags>Done</Tags>
      <Block title="Main Block">
        <div>hello</div>
        <div>hello</div>
        <div>hello</div>
      </Block>
    </>
  );
};

export const Home = React.memo(HomeComponent);
