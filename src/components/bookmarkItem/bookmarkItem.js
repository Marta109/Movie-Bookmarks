import { useContext, useState } from "react";
import { useSearchParams } from "react-router";
import { AppContext } from "../../contexts/appContext";
import getFlags from "../../utils/getFlags";
import getRatedDetails from "../../utils/getRatedDetails";
import Button from "../button/button";
import noImg from "../../assets/images/no-img.jpg";
import "./bookmarkItem.css";

const BookmarkItem = ({ movie, modal, setFavorites }) => {
  const {
    imdbID,
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
  } = movie;
  const { state } = useContext(AppContext);
  const [searchParams, setSearchParams] = useSearchParams();
  const [isFavorite, setFavorite] = useState(
    state.favorites.some((m) => m.imdbID === imdbID)
  );

  const handleClick = () => {
    setSearchParams({ movieId: imdbID });
    modal(true);
  };

  const toggleFavorite = () => {
    setFavorites(movie, imdbID);
    setFavorite((prev) => !prev);
  };

  const handleWatch = () => {
    window.open(`https://www.imdb.com/title/${imdbID}`, "_blank");
  };

  return (
    <div className="card mb-3 bookmark-item">
      <div className="bookmark-item-container">
        <div className="bookmark-item-img">
          <img
            src={Poster.length > 7 ? Poster : noImg}
            className="img-fluid"
            alt={Title}
          />
        </div>
        <div className="bookmark-item-descr">
          <div className="btn-container">
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
              classes="modal-btn"
            />
          </div>
          <div className="card-body">
            <h5 className="card-title">{Title}</h5>
            <div className="movie-detail">
              <div className="card-text">Year:</div>
              <div className="card-text-secondary">{Year}</div>
              <span></span>
              <div className="card-text">Runtime:</div>
              <div className="card-text-secondary">{Runtime}</div>
            </div>
            <div className="movie-detail">
              <div className="card-text">Released:</div>
              <div className="card-text-secondary">{Released}</div>
            </div>
            <div className="movie-detail">
              <div className="card-text">Rated:</div>
              <div className="card-text-secondary">
                {getRatedDetails(Rated, "divElem")}
              </div>
            </div>
            <div className="movie-detail">
              <div className="card-text">Country:</div>
              <div className="card-text-secondary">{getFlags(Country)}</div>
            </div>
            <div className="movie-detail">
              <div className="card-text">Language:</div>
              <div className="card-text-secondary">{Language}</div>
            </div>
            <div className="movie-detail">
              <div className="card-text">Genre:</div>
              <div className="card-text-secondary">{Genre}</div>
            </div>
            <hr />
            <div className="plot-container">
              <div className="card-text">The Plot</div>
              <div className="card-text-secondary">{Plot}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookmarkItem;
