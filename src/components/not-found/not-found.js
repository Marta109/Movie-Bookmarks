import { useContext } from "react";
import { AppContext } from "../../contexts/appContext";
import Button from "../button/button";
import notFound from "../../assets/images/notFound.webp";
import "./not-found.css";

const NotFound = () => {
  const { state, dispatch } = useContext(AppContext);
  const handClick = () => {
    dispatch({ type: "SET_ERROR", payload: false });
    dispatch({ type: "SET_SEARCH", payload: "movie" });
  };
  return (
    <ul className="not-found">
      <div className="not-found-descr">
        <p>{state.error}</p>
        <Button child={"return back"} type="button" onClick={handClick} />
      </div>
      <div className="no-film">
        <img src={notFound} alt="No film" />
      </div>
    </ul>
  );
};

export default NotFound;
