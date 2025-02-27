import { useContext } from "react";
import { QuizContext } from "../../context/quizContext";
import StartScreen from "../start-screen/start-screen";
import Spinner from "../../../../components/spinner/spinner";
import NotFound from "../../../../components/not-found/not-found";
import GameBoard from "../game-board/game-board";
import FinishScreen from "../finish-screen/finish-screen";

const QuizApp = () => {
  const { status } = useContext(QuizContext);

  if (status === "loading") {
    return <Spinner />;
  } else if (status === "error") {
    return <NotFound message={"Sorry This Page Isn’t Available😣"} />;
  }

  return (
    <div className="quiz">
      {status === "ready" && <StartScreen />}
      {status === "active" && <GameBoard />}
      {status === "finished" && <FinishScreen />}
    </div>
  );
};

export default QuizApp;
