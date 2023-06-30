import React from "react";
import { sidebarData } from "../../data/sidebar/sidebarData";
import { SidebarAccordion } from "./SidebarAccordion";

const SidebarComponent = () => {
  const data = sidebarData;
  return (
    <div className="sidebar">
      <div className="sidebar-fixed">
        <div className="sidebar-search">
          <input placeholder="Search..."/>
          <button>
            <i className="fa fa-search"></i>
          </button>
        </div>
        <hr />
      </div>
      <div className="sidebar-list">
        {data.map((eachData: any) => (
          <SidebarAccordion view={eachData.view} outer={eachData.outer} inner={eachData.inner} />
        ))}
      </div>
    </div>
  );
};

export const Sidebar = React.memo(SidebarComponent);
