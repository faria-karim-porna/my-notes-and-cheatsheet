import React from "react";
import { Sidebar } from "../common/Sidebar";
import { Topbar } from "../common/Topbar";
import { Main } from "../common/Main";

const HomeComponent = () => {
  return (
    <>
      <Topbar />
      <div className="d-flex w-100">
        <Sidebar />
        <Main />
      </div>
    </>
  );
};

export const Home = React.memo(HomeComponent);
