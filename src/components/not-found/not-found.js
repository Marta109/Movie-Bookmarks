import Button from "../button/button";
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
        <img
          src="https://media.giphy.com/media/qUEkcv8EGkRUV4Ufl0/giphy.gif?cid=ecf05e472z05vumh03zmj72yluh74i3e5n679pb4b2feenc4&ep=v1_gifs_search&rid=giphy.gif&ct=g"
          alt="No film"
        />
      </div>
    </ul>
  );
};

export default NotFound;
