import { useContext } from "react";
import { AppContext } from "../../contexts/appContext";
import { QuizContext } from "../../pages/quiz/context/quizContext";
import Button from "../button/button";
import notFound from "../../assets/images/notFound.webp";
import "./not-found.css";

const NotFound = ({ message }) => {
  const { state, dispatch } = useContext(AppContext);
  const handClick = () => {
    dispatch({ type: "SET_ERROR", payload: false });
    dispatch({ type: "SET_SEARCH", payload: "movie" });
  };
  return (
    <ul className="not-found">
      <div className="not-found-descr">
        {message ? <p>{message}</p> : <p>{state.error}</p>}
        {message ? (
          ""
        ) : (
          <Button child={"return back"} type="button" onClick={handClick} />
        )}
      </div>
      <div className="no-film">
        <img src={notFound} alt="No film" />
      </div>
    </ul>
  );
};

export default NotFound;
