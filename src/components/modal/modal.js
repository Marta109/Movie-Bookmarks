import { useState, useEffect } from "react";
import UrlParams from "../../utils/urlParams/urlParams";
import Button from "../button/button";
import FilmApi from "../../server/filmApi";
import MovieDetails from "../movieDetails/movieDetails";
import Spinner from "../spinner/spinner";
import "./modal.css";
import useLocalStorageState from "../../hooks/use-localStorage-state";

const Modal = ({ showModal, setShowModal }) => {
  const [movieID, setMoviId] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [isFavorite, setFavorite] = useState(false);
  const [data, setData] = useState(null);
  const [moviesState, setMovies] = useLocalStorageState([], "movies");

  const closeModal = () => {
    document.body.style.overflow = "";
    UrlParams.removeId();
    setIsOpen(false);
    setShowModal(false);
    setData(null);
  };

  useEffect(() => {
    const movieId = UrlParams.getId();
    setIsOpen(showModal);
    if (movieId) {
      setMoviId(movieId);
      FilmApi.getMovieById(movieId).then((data) => {
        if (data.success) {
          setData(data.data);
          document.body.style.overflow = "hidden";
          setFavorite(!!moviesState.filter((m) => m.imdbID === movieId).length);
        } else {
          console.error(data.message);
          closeModal();
        }
      });
    } else {
      closeModal();
    }
  }, [showModal]);

  const closeModalOnBackdropClick = (e) => {
    if (e.target.classList.contains("modal")) {
      closeModal();
      setMoviId(null);
    }
  };

  const toggleFavorite = () => {
    setFavorite(!isFavorite);
    setMovies((prevMovies) =>
      prevMovies.some((movie) => movie.imdbID === movieID)
        ? prevMovies.filter((movie) => movie.imdbID !== movieID)
        : [...prevMovies, data]
    );
  };

  return (
    <div className="app-modal">
      <div
        className={`modal ${isOpen ? "show d-block" : "d-none"}`}
        tabIndex="-1"
        onClick={closeModalOnBackdropClick}
      >
        <div className="modal-dialog  modal-dialog-scrollable">
          <div className="modal-content">
            {!data ? (
              <Spinner />
            ) : (
              <>
                <div className="modal-header">
                  <h4 className="modal-title">
                    {data.Title} ({data.Year})
                  </h4>

                  <button
                    type="button"
                    className="btn-close"
                    onClick={closeModal}
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body">
                  <MovieDetails data={data} />
                </div>
                <div className="modal-footer">
                  <Button
                    child={<i className="fa-solid fa-bookmark"></i>}
                    type="button"
                    classes={`modal-btn ${isFavorite && "favorite"}`}
                    title="save"
                    onClick={toggleFavorite}
                  />
                  <Button
                    child="close"
                    type="button"
                    onClick={closeModal}
                    classes="modal-btn"
                  />
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      {isOpen && <div className="modal-backdrop show"></div>}
    </div>
  );
};

export default Modal;
