import React, { useState, useEffect } from "react";


const UncheckListComponent = (props: React.PropsWithChildren) => {
  const { children } = props;
  return (
    <div className="d-flex uncheck-list align-items-center my-2">
      <div className=""></div>
      <div>{children}</div>
    </div>
  );
};

export const UncheckList = React.memo(UncheckListComponent);
