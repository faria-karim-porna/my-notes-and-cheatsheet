import React, { useState } from "react";
import Speech from "react-speech";

type TextToVoiceProps = {
  className?: string;
  text?: string;
  shouldAlwaysView?: boolean;
};

const TextToVoiceComponent = (props: TextToVoiceProps) => {
  const { className, text, shouldAlwaysView } = props;
  const [viewText, setViewText] = useState(false);
  const viewHandler = () => {
    setViewText(!viewText);
  };
  return (
    <>
      <div className={`${className} my-4 d-flex align-items-center speech-to-text-container`}>
        <Speech
          text={text}
          voice="Google UK English Female"
          pitch="1"
          rate="1"
          volume="1"
          lang="en-GB"
          textAsButton={viewText || shouldAlwaysView}
        />
        {!shouldAlwaysView ? (
          <div onClick={() => viewHandler()} className="mx-4 text-nowrap">
            {viewText ? "No View" : "View"}
          </div>
        ) : null}
      </div>
    </>
  );
};

export const TextToVoice = React.memo(TextToVoiceComponent);
