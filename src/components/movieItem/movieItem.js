import { useState } from "react";
import getFlags from "../../utils/getFlags";
import getRatedDetails from "../../utils/getRatedDetails";
import UrlParams from "../../utils/urlParams/urlParams";
import Button from "../button/button";
import "./movieItem.css";

const MovieItem = ({ movie, modal, setMovies }) => {
  const {
    Title,
    Year,
    Country,
    Genre,
    Language,
    Plot,
    Poster,
    Rated,
    Runtime,
    Released,
    imdbID,
  } = movie;

  const [isFavorite, setFavorite] = useState(true);

  const handelClick = () => {
    UrlParams.addId(imdbID);
    modal(true);
  };

  const toggleFavorite = (e) => {
    setFavorite(!isFavorite);
    setMovies(movie, imdbID);
  };

  return (
    <div className="card mb-3 movie-item">
      <div className="movie-item-container" onClick={handelClick}>
        <div className="movie-item-img">
          <img src={Poster} className="img-fluid " alt={Title} />
        </div>
        <div className="movie-item-descr">
          <div className="btn-container">
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
              onClick={handelClick}
              classes="modal-btn"
            />
          </div>
          <div className="card-body">
            <h5 className="card-title">{Title}</h5>
            <div className="movie-detail">
              <div className="card-text">Year:</div>
              <div className="card-text-secondary"> {Year}</div>
              <span></span>
              <div className="card-text">Runtime:</div>
              <div className="card-text-secondary"> {Runtime}</div>
            </div>
            <div className="movie-detail">
              <div className="card-text">Released:</div>
              <div className="card-text-secondary"> {Released}</div>
            </div>
            <div className="movie-detail">
              <div className="card-text">Rated:</div>

              <div className="card-text-secondary">
                {getRatedDetails(Rated, "divElem")}
              </div>
            </div>

            <div className="movie-detail">
              <div className="card-text">Country:</div>
              <div className="card-text-secondary"> {getFlags(Country)}</div>
            </div>
            <div className="movie-detail">
              <div className="card-text">Language:</div>
              <div className="card-text-secondary">{Language}</div>
            </div>
            <div className="movie-detail">
              <div className="card-text">Genre:</div>
              <div className="card-text-secondary"> {Genre}</div>
            </div>
            <hr />
            <div className="plot-container">
              <div className="card-text"> The Plot</div>
              <div className="card-text-secondary">{Plot}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieItem;
