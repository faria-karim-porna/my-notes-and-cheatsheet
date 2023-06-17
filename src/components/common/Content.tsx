import DocViewer, { DocViewerRenderers } from "@cyntler/react-doc-viewer";
import { useState } from "react";
import React from "react";

function ContentComponent() {
  const docs = [
    {
      uri: `https://github.com/faria-karim-porna/my-notes-and-cheatsheet/blob/main/public/Hashnode.docx?raw=true`,
      fileType: "docx",
      fileName: "Hashnode.docx",
    },
  ];

  return (
    <div>
      <DocViewer
        documents={docs}
        pluginRenderers={DocViewerRenderers}
        config={{ header: { disableHeader: true } }}
        style={{ width: "700px", height: "866px", overflow: "hidden" }}
      />
    </div>
  );
}

export const Content = React.memo(ContentComponent);
