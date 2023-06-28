import React, { useState, useEffect } from "react";

const CheckListComponent = (props: React.PropsWithChildren) => {
  const { children } = props;
  return (
    <div className="d-flex check-list align-items-center my-2">
      <div className="d-flex justify-content-center align-items-center">
        <i className="fa fa-check"></i>
      </div>
      <div>{children}</div>
    </div>
  );
};

export const CheckList = React.memo(CheckListComponent);
