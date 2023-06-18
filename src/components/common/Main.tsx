import React from "react";
import { useAppSelector } from "../core/redux/reduxStore";
import { shallowEqual } from "react-redux";
import { Topbar } from "./Topbar";
import { Sidebar } from "./Sidebar";
import { CheatSheetBackendNodeJs } from "../pages/CheatsheetBackendNodeJs";
import { Home } from "../pages/Home";

const MainComponent = () => {
  const store = useAppSelector(
    (state) => ({
      page: state.UI.pageView,
    }),
    shallowEqual
  );
  return (
    <>
      <Topbar />
      <div className="d-flex w-100">
        <Sidebar />
        <div className="main">{store.page === "NODE_JS_CHEATSHEET" ? <CheatSheetBackendNodeJs /> : <Home />}</div>
      </div>
    </>
  );
};

export const Main = React.memo(MainComponent);
