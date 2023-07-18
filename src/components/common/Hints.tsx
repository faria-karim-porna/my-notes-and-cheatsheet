import React, { useState } from "react";

type HintProps = {
  hints?: string[];
};

const HintsComponent = (props: HintProps) => {
  const { hints } = props;
  const [showHints, setShowHints] = useState(false);
  return (
    <>
      {(hints?.length ?? 0) > 0 && !showHints ? (
        <div onClick={() => setShowHints(true)} className="hints-button">💡 Show Hints</div>
      ) : (hints?.length ?? 0) > 0 && showHints ? (
        <div>
          {hints?.map((hint) => (
            <span className="hints">{hint}</span>
          ))}
          <div onClick={() => setShowHints(false)} className="hints-button">💡 Hide Hints</div>
        </div>
      ) : null}
    </>
  );
};

export const Hints = React.memo(HintsComponent);
