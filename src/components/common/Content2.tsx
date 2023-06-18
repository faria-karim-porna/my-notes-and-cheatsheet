import React, { useState, useEffect } from "react";

const Content2Component = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [file, setFile] = useState<any | null>(null);

  const handleFileChange = (event: any) => {
    setFile(event.target.files[0]);
  };

  const [content, setContent] = useState("");

  const handleFileRead = async () => {
    const reader = new FileReader();
    reader.onload = (event: any) => {
      setContent(event.target.result);
      setIsLoading(false);
    };
    reader.readAsText(file);
  };

  useEffect(() => {
    handleFileRead();
  }, [file]);

  const docs = [{ uri: `${import.meta.env.PUBLIC_URL}/../../../../public/Hashnode.docx`, fileType: "txt" }];
  return (
    <div>
      <input type="file" name="file" id="file" onChange={handleFileChange} />
      <div dangerouslySetInnerHTML={{ __html: content }} />
      <iframe src={`https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf`} width="640px" height="300px">
        This is an embedded{" "}
        <a target="_blank" href="https://office.com">
          Microsoft Office
        </a>{" "}
        document, powered by{" "}
        <a target="_blank" href="https://office.com/webapps">
          Office
        </a>
        .
      </iframe>
      <iframe
        src="https://view.officeapps.live.com/op/embed.aspx?src=https%3A%2F%2Fraw%2Egithubusercontent%2Ecom%3A443%2Fdolanmiu%2Fdocx%2Fmaster%2Fdemo%2Fdotx%2Ftemplate%2Edotx"
        width="640px"
        height="300px"
      >
        This is an embedded{" "}
        <a target="_blank" href="https://office.com">
          Microsoft Office
        </a>{" "}
        document, powered by{" "}
        <a target="_blank" href="https://office.com/webapps">
          Office
        </a>
        .
      </iframe>
      <iframe
        src="https://docs.google.com/viewer?embedded=true&url=https%3A%2F%2Fgithub.com%2Ffaria-karim-porna%2Fmy-notes-and-cheatsheet%2Fblob%2Fmain%2Fpublic%2FHashnode2.docx%3Fraw%3Dtrue"
        width="640px"
        height="300px"
      ></iframe>
    </div>
  );
};

export const Content2 = React.memo(Content2Component);
