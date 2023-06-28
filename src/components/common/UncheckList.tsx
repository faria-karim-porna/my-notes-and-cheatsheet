import React, { useState, useEffect, ReactNode } from "react";

const UncheckListComponent = (props: React.PropsWithChildren) => {
  const { children } = props;
  return (
    <div className="my-4">
      {(children as ReactNode[])?.map((child: ReactNode, index: number) => (
        <div className="d-flex uncheck-list align-items-center my-2">
          <div className=""></div>
          {child}
        </div>
      ))}
    </div>
  );
};

export const UncheckList = React.memo(UncheckListComponent);
