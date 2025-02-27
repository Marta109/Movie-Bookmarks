import { useContext } from "react";
import "./progress.css";
import { QuizContext } from "../../context/quizContext";

const Progress = () => {
  const { points, index, questions, answer } = useContext(QuizContext);
  const maxPoint = questions.length * 10;
  return (
    <div className="progress-bar">
      <div className="progress-info">
        <p>
          Question <strong>{index + 1}</strong> / {questions.length}
        </p>
        <p className="points">
          Points <strong>{points}</strong> / {maxPoint}
        </p>
      </div>
      <div className="progress">
        <div
          className="progress-bar  bg-success "
          role="progressbar"
          style={{
            width: `${
              ((index + Number(answer !== null)) / questions.length) * 100
            }%`,
          }}
        >
          {Math.round(
            ((index + Number(answer !== null)) / questions.length) * 100
          )}
          %
        </div>
      </div>
    </div>
  );
};

export default Progress;
