import { QuizProvider } from "./context/quizContext";
import QuizApp from "./components/quizApp/quizApp";
import "./quiz.css";
const Quiz = () => {
  return (
    <>
      <QuizProvider>
        <QuizApp />
      </QuizProvider>
    </>
  );
};

export default Quiz;
