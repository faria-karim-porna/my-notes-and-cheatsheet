import React from "react";

type SidebarAccordionProps = {
  view?: string;
  outer?: string;
  inner?: SidebarAccordionProps[] | [];
};

const SidebarAccordionComponent = (props: SidebarAccordionProps) => {
  const { view, inner, outer } = props;
  return (
    <>
      <div className="sidebar-accordion-outer d-flex justify-content-between">
        <div>{outer}</div>
        <div>caret</div>
      </div>
      <div className="sidebar-accordion-inner">
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
