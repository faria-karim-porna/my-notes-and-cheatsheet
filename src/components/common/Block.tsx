import React, { useState, useEffect } from "react";

type BlockProps = {
  title: string;
};

const BlockComponent = (props: React.PropsWithChildren<BlockProps>) => {
  const { title, children } = props;
  return (
    <div className="block my-4">
      <h4>{title}</h4>
      <hr />
      <div>{children}</div>
    </div>
  );
};

export const Block = React.memo(BlockComponent);
