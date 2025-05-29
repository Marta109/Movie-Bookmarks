import { useContext, useState } from "react";
import Button from "../../../../components/button/button";
import { QuizContext } from "../../context/quizContext";
import startSound from "../../../../assets/sounds/start.mp3";
import "./start-screen.css";

const StartScreen = () => {
  const { questions, dispatch, userName } = useContext(QuizContext);
  const [name, setUserName] = useState(userName);
  const [isStart, setIsStart] = useState(false);
  const [countdown, setCountdown] = useState(4);
  const questionsCount = questions.length;

  const playSound = (sound) => {
    const audio = new Audio(sound);
    audio.play();
  };

  const startHandler = () => {
    setIsStart(true);
    playSound(startSound);

    let timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev === 1) {
          clearInterval(timer);
          setTimeout(() => {
            dispatch({ type: "START", payload: name || userName });
          }, 500);
          return "GO!🚩";
        }
        return prev - 1;
      });
    }, 1000);
  };
  if (isStart) {
    return (
      <div className="quiz-title">
        <h2>Game starting in</h2>
        <h1>{countdown}</h1>
      </div>
    );
  }

  return (
    <form className="start-screen" onSubmit={startHandler}>
      <div className="quiz-title">
        <h2>Welcome to the quiz game</h2>
        <h3> {questionsCount} questions to test your knowledge!.</h3>
      </div>
      <Button
        type="submit"
        child={"Start Game"}
        // onClick={() => dispatch({ type: "START", payload: name })}
      />

      <div className="input-group input-group-sm mb-3 userName">
        <span className="input-group-text" id="inputGroup-sizing-sm">
          UserName
        </span>
        <input
          type="text"
          className="form-control"
          aria-label="Sizing example input"
          aria-describedby="inputGroup-sizing-sm"
          value={name}
          onChange={(e) => setUserName(e.target.value.trim())}
        />
      </div>
    </form>
  );
};

export default StartScreen;
