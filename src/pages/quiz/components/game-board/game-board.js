import Progress from "../progress/progress";
import Questions from "../questions/questions";
import Footer from "../footer/footer";
import "./game-board.css";

const GameBoard = () => {
  return (
    <div className="game-board">
      <Progress />
      <Questions />
      <Footer />
    </div>
  );
};

export default GameBoard;
