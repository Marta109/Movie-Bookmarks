import { useContext } from "react";
import { AppContext } from "../../contexts/appContext";
import UrlParams from "../../utils/urlParams/urlParams";
import Button from "../button/button";
import noImg from "../../assets/images/no-img.jpg";
import "./card.css";

const Card = ({ data, setShowModal }) => {
  const { state, setFavorites } = useContext(AppContext);
  const { Poster, Title, Year, imdbID } = data;

  const isFavorite = state.favorites.some((movie) => movie.imdbID === imdbID);

  const handleClick = (e) => {
    if (
      e.target.classList.contains("modal-btn") ||
      e.target.classList.contains("fa-solid")
    ) {
      return;
    }
    UrlParams.addId(imdbID);
    setShowModal(true);
  };

  const toggleFavorite = () => {
    setFavorites(data, imdbID);
  };
  const handleWatch = () => {
    window.open(`https://www.imdb.com/title/${imdbID}`, "_blank");
  };

  return (
    <div className="card-item" onClick={handleClick}>
      <div className="card">
        <img
          src={Poster.length > 7 ? Poster : noImg}
          className="card-img-top"
          alt={Title}
        />
        <div className="card-body">
          <h5 className="card-title">{Title}</h5>
          <p className="card-text">Year: {Year}</p>
          <Button
            child={<i className="fa-solid fa-play"></i>}
            type="button"
            classes="modal-btn watch"
            title="Watch on IMDB"
            onClick={handleWatch}
          />
          <Button
            child={<i className="fa-solid fa-bookmark"></i>}
            type="button"
            classes={`modal-btn ${isFavorite ? "favorite" : ""}`}
            title="save"
            onClick={toggleFavorite}
          />
          <Button
            child="more"
            type="button"
            onClick={handleClick}
            title="read more"
          />
        </div>
      </div>
    </div>
  );
};

export default Card;
