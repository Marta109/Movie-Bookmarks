import Button from "../button/button";
import notFound from "../../assets/images/notFound.webp";
import "./not-found.css";

const NotFound = ({ error, url = "" }) => {
  const handClick = () => {
    error.setError(false);
  };
  return (
    <ul className="not-found">
      <div className="not-found-descr">
        <p>{error.errorMessage}</p>
        <Button child={"return back"} type="button" onClick={handClick} />
      </div>
      <div className="no-film">
        <img src={notFound} alt="No film" />
      </div>
    </ul>
  );
};

export default NotFound;
