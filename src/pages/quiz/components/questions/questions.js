import { useContext } from "react";
import { QuizContext } from "../../context/quizContext";
import QuestionOptions from "../question-options/question-options";
import "./questions.css";

const Questions = () => {
  const { index, questions } = useContext(QuizContext);


  return (
    <div className="questions">
      <h4>{questions[index].question}</h4>
      <QuestionOptions question={questions[index]} />
    </div>
  );
};

export default Questions;
