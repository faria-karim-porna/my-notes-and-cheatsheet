import React, { useState } from "react";
import { useAppDispatch } from "../core/redux/reduxStore";
import { UIAction } from "../core/redux/slices/UiSlice";

type SidebarAccordionProps = {
  view?: string;
  outer?: string;
  inner?: SidebarAccordionProps[] | [];
  path?: string;
};

const SidebarAccordionComponent = (props: SidebarAccordionProps) => {
  const { view, outer, inner } = props;

  const [viewInner, setViewInner] = useState<string[]>([]);
  const dispatch = useAppDispatch();
  return (
    <>
      <div
        className="sidebar-accordion-outer d-flex justify-content-between font-16"
        onClick={() => {
          if (view && viewInner.includes(view)) {
            const index = viewInner.indexOf(view);
            setViewInner([...viewInner.slice(0, index)]);
          } else {
            if (view) {
              setViewInner([...viewInner, view]);
            }
          }
        }}
      >
        <div>{outer}</div>
        <div>
          <i className={view && viewInner.includes(view) ? "fa fa-caret-up" : "fa fa-caret-down"}></i>
        </div>
      </div>
      <div className={`sidebar-accordion-inner ${view && viewInner.includes(view) ? "d-block" : "d-none"}`}>
        {inner?.map((accordionInner) =>
          (accordionInner.inner?.length ?? 0) > 0 ? (
            <SidebarAccordion view={accordionInner.view} outer={accordionInner.outer} inner={accordionInner.inner} />
          ) : (
            <div
              className="sidebar-no-accordion"
              onClick={() => {
                if (accordionInner.view) {
                  dispatch(UIAction.setPage(accordionInner.view));
                }
              }}
            >
              {accordionInner.outer}
            </div>
          )
        )}
      </div>
    </>
  );
};

export const SidebarAccordion = React.memo(SidebarAccordionComponent);
