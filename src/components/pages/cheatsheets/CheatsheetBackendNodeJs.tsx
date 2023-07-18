import React from "react";
import { Accordion } from "../../common/Accordion";
import { CodeBlock } from "../../common/Codeblock";

const CheatSheetBackendNodeJsComponent = () => {
  return (
    <>
      <Accordion outer="MongoDB, Node.js And TypeScript (Node Version: 18.16.0)">
        <Accordion outer="Necessary Setup And Installation">
          <div>Create a folder in the preferred location of the pc</div>
          <div>Named the folder as the project name</div>
          <div>Write the following command inside the terminal of the folder</div>
          <Accordion outer="Terminal Codes">
            <CodeBlock language="bash">{`npm install express cors mongoose`}</CodeBlock>
            <CodeBlock language="bash">{`npm install @types/node @types/express @types/mongoose @types/cors`}</CodeBlock>
            <CodeBlock language="bash">{`npm install -D concurrently nodemon`}</CodeBlock>
            <CodeBlock language="bash">{`npm install dotenv`}</CodeBlock>
            <CodeBlock language="bash">{`npm install mongodb`}</CodeBlock>
            <CodeBlock language="bash">{`npm install body-parser`}</CodeBlock>
            <CodeBlock language="bash">{`npm install @types/body-parser`}</CodeBlock>
          </Accordion>
          <div>Only for authentication, write the following command inside the terminal of the folder</div>
          <Accordion outer="Terminal Codes">
            <CodeBlock language="bash">{`npm install bcryptjs jsonwebtoken`}</CodeBlock>
            <CodeBlock language="bash">{`npm install --save-dev @types/bcryptjs`}</CodeBlock>
            <CodeBlock language="bash">{`npm install --save-dev @types/jsonwebtoken`}</CodeBlock>
          </Accordion>
        </Accordion>
      </Accordion>
    </>
  );
};

export const CheatSheetBackendNodeJs = React.memo(CheatSheetBackendNodeJsComponent);
