import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { a11yLight } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { CopyToClipboard } from "react-copy-to-clipboard";
const CodeBlockComponent = () => {
  const codeString = `function helloWorld(){
    console.log("hello world");
  }`;
  return (
    <div className="code-block">
      <div className="d-flex justify-content-between code-block-header">
        <div>Code Snippet</div>
        <CopyToClipboard text={codeString}>
          <div>Copy</div>
        </CopyToClipboard>
      </div>
      <div className="code-section">
        <SyntaxHighlighter language="javascript" style={a11yLight}>
          {codeString}
        </SyntaxHighlighter>
      </div>
    </div>
  );
};

export const CodeBlock = React.memo(CodeBlockComponent);