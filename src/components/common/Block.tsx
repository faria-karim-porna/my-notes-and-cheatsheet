import React, { ReactNode } from "react";

const BlockComponent = (props: React.PropsWithChildren) => {
  const { children } = props;
  return (
    <div className="block">
      {Array.isArray(children) ? (children as ReactNode[])?.map((child: ReactNode, index: number) => child) : children}
    </div>
  );
};

export const Block = React.memo(BlockComponent);
