import { createContext, useEffect, useReducer } from "react";
import QuizApi from "../../../server/quizApi";

const initialState = {
  status: "loading",
  index: 0,
  answer: null,
  points: 0,
  questions: [],
  maxPossiblePoints: 0,
  secondsRemaining: null,
};

function reducer(state, action) {
  switch (action.type) {
    case "DATA_RECEIVED":
      const maxPossiblePoints = action.payload.reduce((prev, cur) => {
        return prev + cur.points;
      }, 0);

      return {
        ...state,
        questions: action.payload,
        status: "ready",
        maxPossiblePoints,
      };
    case "DATA_FAILED":
      return {
        ...state,
        status: "error",
      };
    case "START":
      return {
        ...state,
        status: "active",
        secondsRemaining: state.questions.length * 30,
      };
    case "NEW_ANSWER":
      const question = state.questions[state.index];
      const newPoints =
        action.payload === question.correctOption
          ? state.points + question.points
          : state.points;

      return {
        ...state,
        answer: action.payload,
        points: newPoints,
      };
    case "NEXT_QUESTION":
      return {
        ...state,
        answer: null,
        index: state.index + 1,
      };
    case "PLAY_AGAIN":
      return {
        ...initialState,
        questions: state.questions,
        maxPossiblePoints: state.maxPossiblePoints,
        status: "ready",
      };
    case "FINISH":
      return {
        ...state,
        status: "finished",
      };
    case "TICK":
      return {
        ...state,
        secondsRemaining: state.secondsRemaining - 1,
        status: state.secondsRemaining === 0 ? "finished" : state.status,
      };
    default:
      throw new Error("Something went wrong can not start the game");
  }
}

export const QuizContext = createContext();

export function QuizProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    QuizApi.getQuestions().then((response) => {
      if (response.success) {
        dispatch({ type: "DATA_RECEIVED", payload: response.data });
      } else {
        dispatch({ type: "DATA_FAILED" });
      }
    });
  }, [dispatch]);


  return (
    <QuizContext.Provider
      value={{
        ...state,
        dispatch,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
}
