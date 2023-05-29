import React from "react";

const HomeComponent = () => {
  return (
    <>
      <div className="bg-success topbar">topbar</div>
      <div className="d-flex w-100">
        <div className="bg-danger sidebar">
          <div className="sidebar-fixed">
            <div>Search</div>
          </div>
          <div className="sidebar-list">
            <div>sidebar</div>
            <div>sidebar</div>
            <div>sidebar</div>
            <div>sidebar</div>
            <div>sidebar</div>
            <div>sidebar</div>
            <div>sidebar</div>
            <div>sidebar</div>
            <div>sidebar</div>
            <div>sidebar</div>
            <div>sidebar</div>
            <div>sidebar</div>
            <div>sidebar</div>
            <div>sidebar</div>
            <div>sidebar</div>
            <div>sidebar</div>
            <div>sidebar</div>
            <div>sidebar</div>
            <div>sidebar</div>
            <div>sidebar</div>
            <div>sidebar</div>
            <div>sidebar</div>
            <div>sidebar</div>
            <div>sidebar</div>
            <div>sidebar</div>
            <div>sidebar</div>
            <div>sidebar</div>
            <div>sidebar</div>
            <div>sidebar</div>
            <div>sidebar</div>
            <div>sidebar</div>
            <div>sidebar</div>
            <div>sidebar</div>
            <div>sidebar</div>
          </div>
        </div>
        <div className="bg-warning main">main</div>
      </div>
    </>
  );
};

export const Home = React.memo(HomeComponent);
