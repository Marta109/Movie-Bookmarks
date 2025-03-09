import { useState, useEffect, useContext, useMemo } from "react";
import { QuizContext } from "../../context/quizContext";
import Confetti from "../confetti/confetti";
import Button from "../../../../components/button/button";
// import winSound from "../../../../assets/sounds/winSound.mp3";
import winSound1 from "../../../../assets/sounds/winSound1.mp3";
import winSound2 from "../../../../assets/sounds/winSound2.mp3";
import winSound3 from "../../../../assets/sounds/winSound3.mp3";
import winSound4 from "../../../../assets/sounds/winSound4.mp3";
import winSound5 from "../../../../assets/sounds/winSound5.mp3";
import "./finish-screen.css";

let winSound = "";

const getEmojiIcon = (percentage) => {
  let emoji;

  if (percentage === 100) {
    emoji = "🥇";
    winSound = winSound1;
  }
  if (percentage >= 80 && percentage < 100) {
    emoji = "🎉";
    winSound = winSound2;
  }
  if (percentage >= 50 && percentage < 80) {
    emoji = "🙃";
    winSound = winSound3;
  }
  if (percentage >= 0 && percentage < 50) {
    emoji = "🤨";
    winSound = winSound4;
  }
  if (percentage === 0) {
    emoji = "🤦‍♂️";
    winSound = winSound5;
  }
  return emoji;
};

const FinishScreen = () => {
  const { points, maxPossiblePoints, dispatch } = useContext(QuizContext);
  const [audio, setAudio] = useState(null);

  const emoji = useMemo(() => {
    return getEmojiIcon((points / maxPossiblePoints) * 100);
  }, [maxPossiblePoints, points]);

  useEffect(() => {
    const audioInstance = new Audio(winSound);
    setAudio(audioInstance);

    audioInstance.play().catch((err) => {
      console.error("Error playing sound:", err);
    });

    return () => {
      audioInstance.pause();
      audioInstance.currentTime = 0;
    };
  }, []);

  const stopMusic = () => {
    if (audio) {
      audio.pause();
      audio.currentTime = 0;
    }
  };

  return (
    <div className="finish-screen">
      <Confetti />
      <h1>Congratulations!</h1>
      <p>You've reached the end of the quiz🎉.</p>
      <div>
        <span>{emoji}</span> Your Score is {points} out of {maxPossiblePoints}
      </div>

      <Button
        child="Play Again"
        onClick={() => {
          dispatch({ type: "PLAY_AGAIN" });
          stopMusic();
        }}
      ></Button>
    </div>
  );
};

export default FinishScreen;
