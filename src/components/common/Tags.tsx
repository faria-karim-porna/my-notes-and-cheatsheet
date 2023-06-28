import React, { useState, useEffect } from "react";

const TagsComponent = (props: React.PropsWithChildren) => {
  const { children } = props;
  const [bgColor, setBgColor] = useState<string | undefined>();
  const [fontColor, setFontColor] = useState<string | undefined>();

  useEffect(() => {
    switch (children) {
      case "Not Started":
        setBgColor("#ff0000");
        setFontColor("white");
        break;
      case "Progress":
        setBgColor("#1bbeff");
        setFontColor("white");
        break;
      case "Done":
        setBgColor("#00c000");
        setFontColor("white");
        break;
      default:
        break;
    }
  }, []);
  return (
    <span className="tags my-2" style={{ backgroundColor: bgColor, color: fontColor }}>
      {children}
    </span>
  );
};

export const Tags = React.memo(TagsComponent);
