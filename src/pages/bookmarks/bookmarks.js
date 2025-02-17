import useLocalStorageState from "../../hooks/use-localStorage-state";
import MovieItem from "../../components/movieItem/movieItem";
import "./bookmarks.css";
import { useState } from "react";
import Modal from "../../components/modal/modal";

const Bookmarks = () => {
  const [moviesState, setMovies] = useLocalStorageState([], "movies");
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="bookmarks">
      <h2 className="bookmarks-title">
        {" "}
        my Bookmarks ( {moviesState.length} )
      </h2>
      {showModal && <Modal showModal={showModal} setShowModal={setShowModal} />}
      {moviesState.length === 0 && (
        <h5 className="no-bookmarks">No bookmarked movies yet.!</h5>
      )}
      {moviesState.map((movie, i) => (
        <MovieItem
          key={i}
          movie={movie}
          modal={setShowModal}
          setMovies={setMovies}
        />
      ))}
    </div>
  );
};

export default Bookmarks;
