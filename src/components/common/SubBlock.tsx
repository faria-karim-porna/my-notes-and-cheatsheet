import React, { ReactNode } from "react";

type SubBlockProps = {
  title: string;
};

const SubBlockComponent = (props: React.PropsWithChildren<SubBlockProps>) => {
  const { title, children } = props;
  return (
    <div className="my-4 flex-grow-1 sub-block">
      <div className="d-flex h-100">
        <div>
          <h4>{title}</h4>
          <hr />
          {Array.isArray(children) ? (
            (children as ReactNode[])?.map((child: ReactNode, index: number) => (
              <div className="py-1 d-flex">
                <span>
                  {index}
                  {". "}
                </span>
                <span>{child}</span>
              </div>
            ))
          ) : (
            <div className="py-1 d-flex">
              <span>{"1. "}</span>
              <span>{children}</span>
            </div>
          )}
        </div>
        <div className="vertical-divider"></div>
      </div>
    </div>
  );
};

export const SubBlock = React.memo(SubBlockComponent);
