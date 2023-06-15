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
    <>
      <div
        className="accordion-outer d-flex justify-content-between"
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        <div>{outer}</div>
        <div>caret</div>
      </div>
      <div className={`accordion-inner ${isOpen ? "d-block" : "d-none"}`}>{children}</div>
    </>
  );
};

export const Accordion = React.memo(AccordionComponent);
