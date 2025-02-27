import { useContext, useState } from "react";
import { QuizContext } from "../../context/quizContext";
import "./question-options.css";
const QuestionOptions = ({ question }) => {
  const { dispatch, answer } = useContext(QuizContext);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const hasAnswered = answer !== null;
  const isCorrect = question.correctOption === answer;

  const handleSelectOption = (index) => {
    dispatch({ type: "NEW_ANSWER", payload: index });
    setSelectedIndex(index);
  };

  return (
    <div className="options">
      {question.options.map((option, index) => {
        const classes = hasAnswered
          ? index === question.correctOption
            ? "correct noHover"
            : "wrong noHover"
          : "";
        let class2 =
          hasAnswered &&
          index === selectedIndex &&
          index !== question.correctOption
            ? " select"
            : "";

        return (
          <button
            key={option}
            className={`q-btn btn-option ${classes} ${class2}`}
            onClick={() => handleSelectOption(index)}
          >
            {option}
          </button>
        );
      })}
    </div>
  );
};

export default QuestionOptions;
