import React from "react";
import { Sidebar } from "../common/Sidebar";
import { Topbar } from "../common/Topbar";
import { Main } from "../common/Main";
import { useAppSelector } from "../core/redux/reduxStore";
import { shallowEqual } from "react-redux";
import { CheatSheetBackendNodeJs } from "./CheatsheetBackendNodeJs";

const HomeComponent = () => {
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
        {store.page === "NODE_JS_CHEATSHEET" ? <CheatSheetBackendNodeJs /> : <Main />}
      </div>
    </>
  );
};

export const Home = React.memo(HomeComponent);
