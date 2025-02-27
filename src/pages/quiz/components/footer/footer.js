import { useContext, useEffect } from "react";
import { QuizContext } from "../../context/quizContext";
import Button from "../../../../components/button/button";
import "./footer.css";

const getCorrectFormat = (sec) => {
  const mins = Math.floor(sec / 60);
  const seconds = sec % 60;

  return (
    <span>
      {mins < 10 && "0"}
      {mins}:{seconds < 10 && "0"}
      {seconds}
    </span>
  );
};
const Footer = () => {
  const { dispatch, answer, index, secondsRemaining, questions } =
    useContext(QuizContext);

  useEffect(() => {
    const id = setInterval(() => {
      dispatch({ type: "TICK" });
    }, 1000);

    return () => {
      clearInterval(id);
    };
  }, [dispatch]);

  const timer = getCorrectFormat(secondsRemaining);

  let actionType = index === questions.length - 1 ? "FINISH" : "NEXT_QUESTION";

  return (
    <footer className="footer">
      <div className="timer">{timer}</div>
      {answer !== null && (
        <Button
          className="btn btn-primary"
          child={index !== questions.length - 1 ? "next" : "finish"}
          onClick={() => dispatch({ type: actionType })}
        ></Button>
      )}
    </footer>
  );
};

export default Footer;
