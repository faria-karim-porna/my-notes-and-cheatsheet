import React from "react";
import { sidebarData } from "../../data/sidebar/sidebarData";
import { SidebarAccordion } from "./SidebarAccordion";

const SidebarComponent = () => {
  const data: any = sidebarData();
  return (
    <div className="bg-danger sidebar">
      <div className="sidebar-fixed">
        <div>Search</div>
      </div>
      <div className="sidebar-list">
        {data.map((eachData: any) => (
          <SidebarAccordion />
        ))}
      </div>
    </div>
  );
};

export const Sidebar = React.memo(SidebarComponent);
