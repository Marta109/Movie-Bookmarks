import { useEffect, useState } from "react";
import UrlParams from "../../utils/urlParams/urlParams";
import Button from "../button/button";
import "./card.css";

const Card = ({ data, modal, setMovies, moviesState }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const { Poster, Title, Year, imdbID } = data;

  useEffect(() => {
    setIsFavorite(!!moviesState.filter((m) => m.imdbID === imdbID).length);
  }, []);

  useEffect(() => {
    setIsFavorite(!!moviesState.filter((m) => m.imdbID === imdbID).length);
  }, [moviesState]);

  const handleClick = (e) => {
    if (
      e.target.classList.contains("modal-btn") ||
      e.target.classList.contains("fa-solid")
    ) {
      return;
    }

    UrlParams.addId(imdbID);
    modal(true);
  };

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
    setMovies(data, imdbID);
  };

  return (
    <div className="card-item" onClick={handleClick}>
      <div className="card">
        <img src={Poster} className="card-img-top" alt={Title} />
        <div className="card-body">
          <h5 className="card-title">{Title}</h5>
          <p className="card-text">Year: {Year}</p>
          <Button
            child={<i className="fa-solid fa-bookmark"></i>}
            type="button"
            classes={`modal-btn ${isFavorite && "favorite"}`}
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
