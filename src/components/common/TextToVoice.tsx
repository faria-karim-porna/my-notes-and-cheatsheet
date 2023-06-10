import React from "react";
import Speech from "react-speech";

const TextToVoiceComponent = () => {
  return (
    <>
      <Speech
        text="I have altered my voice"
        voice="Google UK English Female"
        pitch="1"
        rate="1"
        volume="1"
        lang="en-GB"
        textAsButton={true}
      />
    </>
  );
};

export const TextToVoice = React.memo(TextToVoiceComponent);
