import React, { useState } from "react";

type AccordionProps = {
  view?: string;
  outer?: string;
  inner?: AccordionProps[] | [];
  path?: string;
};

const AccordionComponent = (props: React.PropsWithChildren<AccordionProps>) => {
  const { outer, children } = props;

  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="accordion my-4">
      <div
        className={`accordion-outer d-flex justify-content-between ${isOpen ? "top-border-radius" : "all-border-radius"}`}
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        <div>{outer}</div>
        <div>
          <i className={isOpen ? "fa fa-caret-up" : "fa fa-caret-down"}></i>
        </div>
      </div>
      <div className={`accordion-inner ${isOpen ? "d-block" : "d-none"}`}>{children}</div>
    </div>
  );
};

export const Accordion = React.memo(AccordionComponent);
