import React, { useState, useEffect, ReactNode } from "react";

type BlockProps = {
  title: string;
};

const BlockComponent = (props: React.PropsWithChildren<BlockProps>) => {
  const { title, children } = props;
  return (
    <div className="block my-4">
      <h4>{title}</h4>
      <hr />
      {Array.isArray(children) ? (
        (children as ReactNode[])?.map((child: ReactNode, index: number) => <div className="py-1">{child}</div>)
      ) : (
        <div className="py-1">{children}</div>
      )}
    </div>
  );
};

export const Block = React.memo(BlockComponent);
