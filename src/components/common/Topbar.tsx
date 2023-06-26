import React from "react";
import { useAppDispatch, useAppSelector } from "../core/redux/reduxStore";
import { UIAction } from "../core/redux/slices/UiSlice";
import { shallowEqual } from "react-redux";

const TopbarComponent = () => {
  const store = useAppSelector(
    (state) => ({
      showSidebar: state.UI.showSidebar,
    }),
    shallowEqual
  );
  const dispatch = useAppDispatch();
  const sideBarVisibility = () => {
    dispatch(UIAction.setSidebarView(!store.showSidebar));
  };
  return (
    <div className="topbar d-flex align-items-center px-4">
      <div className="px-3 py-2 sidebar-button" onClick={() => sideBarVisibility()}>
        <i className="fa fa-bars"></i>
      </div>
      <div className="px-3">Faria's Notes And Cheatsheet</div>
    </div>
  );
};

export const Topbar = React.memo(TopbarComponent);
