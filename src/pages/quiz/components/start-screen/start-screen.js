import { useContext } from "react";
import Button from "../../../../components/button/button";
import "./start-screen.css";
import { QuizContext } from "../../context/quizContext";

const StartScreen = () => {
  const { questions, dispatch } = useContext(QuizContext);
  const questionsCount = questions.length;
  return (
    <div className="start-screen">
      <div className="quiz-title">
        <h2>Welcome to the quiz game</h2>
        <h3> {questionsCount} questions to test your knowledge!.</h3>
      </div>
      <Button
        type="button"
        child={"Start Game"}
        onClick={() => dispatch({ type: "START" })}
      />
    </div>
  );
};

export default StartScreen;
