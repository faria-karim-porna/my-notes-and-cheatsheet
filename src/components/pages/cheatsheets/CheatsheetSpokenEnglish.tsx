import React from "react";
import { Accordion } from "../../common/Accordion";

const CheatSheetSpokenEnglishComponent = () => {
  return (
    <>
      <Accordion outer="Interview Preparation">
        <Accordion outer="Common Words For Pausing And Thinking">
          <ul>
            <li>Comment on the previous person’s input</li>
            <ul>
              <li>Wow, that’s a great question!</li>
              <li>Wow, that’s an interesting question!</li>
              <li>Wow, that’s a difficult question!</li>
              <li>Oh, you know, no one has ever asked me that, let me see, I guess</li>
            </ul>
            <li>Rephrase what has just been asked (If the question is complex or lengthy)</li>
            <ul>
              <li>Ah, so I guess you are asking me + "main question"</li>
            </ul>
            <li>Introduce Your Thinking (If asks about your opinion)</li>
            <ul>
              <li>Ah, Right, I guess I should</li>
              <li>I think</li>
              <li>According to me</li>
              <li>So I guess</li>
              <li>In my opinion</li>
            </ul>
            <li>Ask them to clarify or repeat what they mean</li>
            <ul>
              <li>Sorry, could you say that again?</li>
              <li>Would you please elaborate the question</li>
              <li>Would you please repeat the question</li>
              <li>Would you please repeat what you have just said for one more time</li>
            </ul>
            <li>To ask for some time</li>
            <ul>
              <li>Let me think about that for a moment.</li>
            </ul>
          </ul>
        </Accordion>
        <Accordion outer="Commonly Used Sentences During Interview">
          <div>Azan is being given. Can we continue after a while</div>
        </Accordion>
      </Accordion>
    </>
  );
};

export const CheatSheetSpokenEnglish = React.memo(CheatSheetSpokenEnglishComponent);
