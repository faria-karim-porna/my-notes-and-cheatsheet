import React from "react";
import { Accordion } from "../common/Accordion";
import { CodeBlock } from "../common/Codeblock";

const CheatSheetFrontendReactJsComponent = () => {
  return (
    <>
      <Accordion outer="React.js And TypeScript (Node Version: 18.16.0)">
        <Accordion outer="Necessary Setup And Installation">
          <div>Go to the preferred location of the pc where you want to create the project</div>
          <div>Write the following command inside the terminal of the preferred location</div>
          <Accordion outer="Terminal Codes">
            <CodeBlock language="bash">{`npm create vite@latest`}</CodeBlock>
          </Accordion>
          <div>Give the project name</div>
          <div>Select React by moving down key and enter</div>
          <div>Select TypeScript + SWC by moving down key and enter</div>
          <div>Goto inside the created folder</div>
          <div>Write the following command inside the terminal of the folder</div>
          <Accordion outer="Terminal Codes">
            <CodeBlock language="bash">{`npm install`}</CodeBlock>
            <CodeBlock language="bash">{`npm install react-router-dom`}</CodeBlock>
            <CodeBlock language="bash">{`npm install @types/react-router-dom`}</CodeBlock>
          </Accordion>
          <div>To run the project, write the following command inside the terminal of the folder</div>
          <Accordion outer="Terminal Codes">
            <CodeBlock language="bash">{`npm run dev`}</CodeBlock>
          </Accordion>
        </Accordion>
      </Accordion>
    </>
  );
};

export const CheatSheetFrontendReactJs = React.memo(CheatSheetFrontendReactJsComponent);
