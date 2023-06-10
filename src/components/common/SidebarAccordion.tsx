import React, { useState } from "react";

type SidebarAccordionProps = {
  view?: string;
  outer?: string;
  inner?: SidebarAccordionProps[] | [];
  path?: string;
};

const SidebarAccordionComponent = (props: SidebarAccordionProps) => {
  const { view, outer, inner } = props;

  const [viewInner, setViewInner] = useState<string[]>([]);
  return (
    <>
      <div className="sidebar-accordion-outer d-flex justify-content-between" onClick={() => setViewInner([...viewInner, view ?? ""])}>
        <div>{outer}</div>
        <div>caret</div>
      </div>
      <div className={`sidebar-accordion-inner ${viewInner.includes(view ?? "") ? "d-block" : "d-none"}`}>
        {inner?.map((accordionInner) =>
          (accordionInner.inner?.length ?? 0) > 0 ? (
            <SidebarAccordion view={accordionInner.view} outer={accordionInner.outer} inner={accordionInner.inner} />
          ) : (
            <div>{accordionInner.outer}</div>
          )
        )}
      </div>
    </>
  );
};

export const SidebarAccordion = React.memo(SidebarAccordionComponent);
