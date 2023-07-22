import React, { ReactNode } from "react";

const BlockComponent = (props: React.PropsWithChildren) => {
  const { children } = props;
  return (
    <div className="block">
      {Array.isArray(children)
        ? (children as ReactNode[])?.map((child: ReactNode, index: number) => (
            <div className="d-flex flex-grow-1 sub-block">
              <div className="w-100">{child}</div>
              {children.length === index + 1 || (index + 1) % 3 === 0 ? null : (
                <div
                  className="vertical-divider"
                  style={{ margin: `10px ${(index + 1) % 3 === 1 && children.length % 3 !== 0 ? 5 : 2.5}%` }}
                ></div>
              )}
            </div>
          ))
        : children}
    </div>
  );
};

export const Block = React.memo(BlockComponent);
