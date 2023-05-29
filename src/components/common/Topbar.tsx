import React from "react";

const TopbarComponent = () => {
  return <div className="bg-success topbar">topbar</div>;
};

export const Topbar = React.memo(TopbarComponent);
