import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { a11yLight } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { CopyToClipboard } from "react-copy-to-clipboard";

interface CodeBlockProps {
  children: string;
  language?: string;
}

const CodeBlockComponent: React.FC<CodeBlockProps> = ({ children, language }) => {
  return (
    <div className="code-block my-4">
      <div className="d-flex justify-content-between code-block-header">
        <div>Code Snippet</div>
        <CopyToClipboard text={children}>
          <div>Copy</div>
        </CopyToClipboard>
      </div>
      <div className="code-section">
        <SyntaxHighlighter language={language} style={a11yLight}>
          {children}
        </SyntaxHighlighter>
      </div>
    </div>
  );
};

export const CodeBlock = React.memo(CodeBlockComponent);
