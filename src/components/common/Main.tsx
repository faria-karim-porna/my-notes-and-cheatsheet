import React from "react";
import { useAppSelector } from "../core/redux/reduxStore";
import { shallowEqual } from "react-redux";
import { Topbar } from "./Topbar";
import { Sidebar } from "./Sidebar";
import { CheatSheetBackendNodeJs } from "../pages/cheatsheets/CheatsheetBackendNodeJs";
import { Home } from "../pages/Home";
import { CheatSheetFrontendReactJs } from "../pages/cheatsheets/CheatsheetFrontendReactjs";
import { RoadmapDataStructureAndAlgorithm } from "../pages/roadmaps/RoadmapDataStructureAndAlgorithm";
import { CheatsheetDataStructureAndAlgorithm } from "../pages/cheatsheets/CheatsheetDataStructureAndAlgorithm";
import { InterviewPreparationHtml } from "../pages/interviewPreperation/InterviewPreparationHtml";
import { InterviewPreparationCss } from "../pages/interviewPreperation/InterviewPreparationCss";
import { InterviewPreparationJavaScript } from "../pages/interviewPreperation/InterviewPreparationJavaScript";
import { InterviewPreparationReactJs } from "../pages/interviewPreperation/InterviewPreparationReactJs";
import { InterviewPreparationObjectOrientedProgramming } from "../pages/interviewPreperation/InterviewPreparationObjectOrientedProgramming";
import { InterviewPreparationDatabaseManagementSystem } from "../pages/interviewPreperation/InterviewPreparationDatabaseManagementSystem";
import { InterviewPreparationBehavioralQuestions } from "../pages/interviewPreperation/interviewPreparationBehavioralQuestions";
import { InterviewPreparationCompanyRelatedQuestions } from "../pages/interviewPreperation/interviewPreparationCompanyRelatedQuestions";
import { CheatSheetSpokenEnglish } from '../pages/cheatsheets/CheatsheetSpokenEnglish';

const MainComponent = () => {
  const store = useAppSelector(
    (state) => ({
      page: state.UI.pageView,
      showSidebar: state.UI.showSidebar,
    }),
    shallowEqual
  );
  return (
    <>
      <Topbar />
      <div className="d-flex w-100">
        {store.showSidebar ? <Sidebar /> : null}
        <div className="main">
          {store.page === "DATA_STRUCTURES_AND_ALGORITHMS_CHEATSHEET" ? (
            <CheatsheetDataStructureAndAlgorithm />
          ) : store.page === "NODE_JS_CHEATSHEET" ? (
            <CheatSheetBackendNodeJs />
          ) : store.page === "REACT_JS_CHEATSHEET" ? (
            <CheatSheetFrontendReactJs />
          ) : store.page === "DATA_STRUCTURES_AND_ALGORITHMS_ROADMAP" ? (
            <RoadmapDataStructureAndAlgorithm />
          ) : store.page === "SPOKEN_ENGLISH_CHEATSHEET" ? (
            <CheatSheetSpokenEnglish />
          ) : store.page === "HTML_INTERVIEW_PREPARATION" ? (
            <InterviewPreparationHtml />
          ) : store.page === "CSS_INTERVIEW_PREPARATION" ? (
            <InterviewPreparationCss />
          ) : store.page === "JAVASCRIPT_INTERVIEW_PREPARATION" ? (
            <InterviewPreparationJavaScript />
          ) : store.page === "REACT_JS_INTERVIEW_PREPARATION" ? (
            <InterviewPreparationReactJs />
          ) : store.page === "OOPS_INTERVIEW_PREPARATION" ? (
            <InterviewPreparationObjectOrientedProgramming />
          ) : store.page === "DBMS_INTERVIEW_PREPARATION" ? (
            <InterviewPreparationDatabaseManagementSystem />
          ) : store.page === "BEHAVIORAL_INTERVIEW_PREPARATION" ? (
            <InterviewPreparationBehavioralQuestions />
          ) : store.page === "COMPANY_RELATED_INTERVIEW_PREPARATION" ? (
            <InterviewPreparationCompanyRelatedQuestions />
          ) : (
            <Home />
          )}
        </div>
      </div>
    </>
  );
};

export const Main = React.memo(MainComponent);
