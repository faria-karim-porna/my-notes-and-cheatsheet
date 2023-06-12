import React from "react";
import Speech from "react-speech";

type TextToVoiceProps = {
  className?: string;
  text?: string;
};

const TextToVoiceComponent = (props: TextToVoiceProps) => {
  const { className, text } = props;
  return (
    <>
      <div className={`${className} my-4`}>
        <Speech text={text} voice="Google UK English Female" pitch="1" rate="1" volume="1" lang="en-GB" textAsButton={true} />
      </div>
    </>
  );
};

export const TextToVoice = React.memo(TextToVoiceComponent);
