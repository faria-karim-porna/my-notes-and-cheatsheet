import React, { ReactNode } from "react";

type SubBlockProps = {
  title: string;
};

const SubBlockComponent = (props: React.PropsWithChildren<SubBlockProps>) => {
  const { title, children } = props;
  return (
    <div className="my-4 flex-grow-1 sub-block">
      <h4>{title}</h4>
      <hr />
      {Array.isArray(children) ? (
        (children as ReactNode[])?.map((child: ReactNode, index: number) => (
          <div className="py-1 d-flex">
            <span>{index + 1}.</span>
            <span className="mx-1">{child}</span>
          </div>
        ))
      ) : (
        <div className="py-1 d-flex">
          <span>1.</span>
          <span className="mx-1">{children}</span>
        </div>
      )}
    </div>
  );
};

export const SubBlock = React.memo(SubBlockComponent);
