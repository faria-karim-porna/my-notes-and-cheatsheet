import DocViewer, { DocViewerRenderers } from "@cyntler/react-doc-viewer";
import { useState } from "react";
import React from "react";

function ContentComponent() {
  const docs = [{ uri: `${import.meta.env.PUBLIC_URL}/../../../../public/aa.txt`, fileType: "txt" }];

  return (
    <div>
      <DocViewer
        documents={docs}
        pluginRenderers={DocViewerRenderers}
        config={{ header: { disableHeader: true } }}
        style={{ width: "500px", height: "800px" }}
      />
    </div>
  );
}

export const Content = React.memo(ContentComponent);
