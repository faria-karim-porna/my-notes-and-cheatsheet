import React from "react";

const SidebarAccordionComponent = () => {
  return (
    <>
      <div className="sidebar-accordion-outer d-flex justify-content-between">
        <div>Sidebar Outer</div><div></div>
      </div>
      <div className="sidebar-accordion-inner">Sidebar Inner</div>
    </>
  );
};

export const SidebarAccordion = React.memo(SidebarAccordionComponent);
