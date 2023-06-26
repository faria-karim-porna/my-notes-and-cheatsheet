import React from "react";
import { useAppSelector } from "../core/redux/reduxStore";
import { shallowEqual } from "react-redux";
import { Topbar } from "./Topbar";
import { Sidebar } from "./Sidebar";
import { CheatSheetBackendNodeJs } from "../pages/CheatsheetBackendNodeJs";
import { Home } from "../pages/Home";
import { CheatSheetFrontendReactJs } from "../pages/CheatsheetFrontendReactjs";

const MainComponent = () => {
  const store = useAppSelector(
    (state) => ({
      page: state.UI.pageView,
      showSidebar: state.UI.showSidebar,
    }),
    shallowEqual
  );
  return (
    <>
      <Topbar />
      <div className="d-flex w-100">
        {store.showSidebar ? <Sidebar /> : null}
        <div className="main">
          {store.page === "NODE_JS_CHEATSHEET" ? (
            <CheatSheetBackendNodeJs />
          ) : store.page === "REACT_JS_CHEATSHEET" ? (
            <CheatSheetFrontendReactJs />
          ) : (
            <Home />
          )}
        </div>
      </div>
    </>
  );
};

export const Main = React.memo(MainComponent);
