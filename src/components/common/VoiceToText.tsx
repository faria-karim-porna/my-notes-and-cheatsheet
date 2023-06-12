import React, { useState } from "react";
import { createSpeechlySpeechRecognition } from "@speechly/speech-recognition-polyfill";
import SpeechRecognition, { useSpeechRecognition } from "react-speech-recognition";

const appId = "6ef49cf6-63c8-404a-be09-b201aad6175d";
const SpeechlySpeechRecognition = createSpeechlySpeechRecognition(appId);
SpeechRecognition.applyPolyfill(SpeechlySpeechRecognition);

const VoiceToTextComponent = () => {
  const { transcript, listening, browserSupportsSpeechRecognition } = useSpeechRecognition();
  const startListening = () => SpeechRecognition.startListening({ continuous: true });

  const [isListen, setIsListen] = useState(false);

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }
  return (
    <>
      <div className="my-4">
        <div
          onClick={() => {
            if (!isListen) {
              startListening();
            } else {
              SpeechRecognition.stopListening();
            }
            setIsListen(!isListen);
          }}
        >
          Microphone
        </div>
        <p>{transcript}</p>
      </div>
    </>
  );
};

export const VoiceToText = React.memo(VoiceToTextComponent);
