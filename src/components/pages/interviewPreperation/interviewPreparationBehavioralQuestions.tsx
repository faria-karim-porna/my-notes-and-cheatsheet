import React from "react";
import { TextToVoice } from "../../common/TextToVoice";
import { behavioralData } from "../../../data/interviewPreparation/behavioralData";
import { Block } from "../../common/Block";
import { useState } from "react";
import { Hints } from "../../common/Hints";
import { SubBlock } from "../../common/SubBlock";

const InterviewPreparationBehavioralQuestionsComponent = () => {
  const data = behavioralData;
  return (
    <>
      <Block>
        <SubBlock title="✨ Tips And Tricks">
          <div>Try To Give Answer Using STAR Method</div>
          <div>
            In STAR S = Situation : Give an example of a team/project/feature/a person who is aligned with the situation of the question.
          </div>
          <div>In STAR T = Task : Give an example of what you are supposed to do/why the situation arises.</div>
          <div>
            In STAR A = Action : Give an example of what you have done in that situation and show your problem-solving skills/ teamwork/
            adaptability/ effective communication skill/ leadership skill.
          </div>
          <div>In STAR R = Result : Tell whether you have succeeded or failed. If failed give example of your learning.</div>
        </SubBlock>
      </Block>
      <div>
        <div>BehavioralQuestions Interview Preparation</div>
        <div>Total {data.length} Questions And Answers</div>
      </div>
      <hr />
      {data.map((queAndAns, index) => (
        <>
          <TextToVoice className="que-voice" text={`${index + 1}. ${queAndAns.questions}`} shouldAlwaysView={true} />
          <TextToVoice className="ans-voice" text={queAndAns.answers} />
          <Hints hints={queAndAns.hints} />
        </>
      ))}
    </>
  );
};

export const InterviewPreparationBehavioralQuestions = React.memo(InterviewPreparationBehavioralQuestionsComponent);
