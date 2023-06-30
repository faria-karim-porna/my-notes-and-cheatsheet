import React, { useState, useEffect, ReactNode } from "react";

const CheckListComponent = (props: React.PropsWithChildren) => {
  const { children } = props;
  return (
    <div className="my-2">
      {Array.isArray(children) ? (
        (children as ReactNode[])?.map((child: ReactNode, index: number) => (
          <div className="d-flex check-list align-items-center my-2">
            <div className="d-flex justify-content-center align-items-center">
              <i className="fa fa-check"></i>
            </div>
            {child}
          </div>
        ))
      ) : (
        <div className="d-flex check-list align-items-center my-2">
          <div className="d-flex justify-content-center align-items-center">
            <i className="fa fa-check"></i>
          </div>
          {children}
        </div>
      )}
    </div>
  );
};

export const CheckList = React.memo(CheckListComponent);
