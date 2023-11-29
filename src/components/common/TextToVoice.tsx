import React, { useState, useEffect } from "react";

type TextToVoiceProps = {
  className?: string;
  text?: string[];
  shouldAlwaysView?: boolean;
};

const TextToVoiceComponent = (props: TextToVoiceProps) => {
  const { className, text, shouldAlwaysView } = props;
  const [viewText, setViewText] = useState(false);
  const viewHandler = () => {
    setViewText(!viewText);
  };

  const synth = window.speechSynthesis;

  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);
  useEffect(() => {
    setVoices(synth.getVoices());
  }, []);

  const [isPlaying, setIsPlaying] = useState(false);

  const speakHandler = () => {
    const utterText = text?.join(" ");
    const utterThis = new SpeechSynthesisUtterance(utterText);
    utterThis.voice = voices[5];
    if (isPlaying) {
      synth.cancel();
    } else {
      synth.speak(utterThis);
    }

    utterThis.onend = () => {
      setIsPlaying(false);
    };

    setIsPlaying(!isPlaying);
  };
  return (
    <>
      <div
        className={`${className} my-4 d-flex align-items-center text-to-speech-container`}
      >
        <div className="text-to-speech-text-area">
          {text?.map((eachParagraph, index) =>
            shouldAlwaysView || viewText ? (
              <div>
                <div>{eachParagraph}</div>
                {index !== text.length - 1 ? <br /> : null}
              </div>
            ) : null
          )}
        </div>
        <div
          onClick={() => {
            speakHandler();
          }}
          className="mx-4 text-to-speech-view-buttons"
        >
          {isPlaying ? (
            <i className="fa fa-volume-off"></i>
          ) : (
            <i className="fa fa-volume-up"></i>
          )}
        </div>
        {!shouldAlwaysView ? (
          <div
            onClick={() => viewHandler()}
            className="mx-4 text-to-speech-view-buttons"
          >
            {viewText ? (
              <i className="fa fa-eye-slash"></i>
            ) : (
              <i className="fa fa-eye"></i>
            )}
          </div>
        ) : null}
      </div>
    </>
  );
};

export const TextToVoice = React.memo(TextToVoiceComponent);
