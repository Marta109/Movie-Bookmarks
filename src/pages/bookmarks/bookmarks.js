import { useState } from "react";
import useLocalStorageState from "../../hooks/use-localStorage-state";
import BookmarkItem from "../../components/bookmarkItem/bookmarkItem";
import Modal from "../../components/modal/modal";
import notFound from "../../assets/images/notFound.webp";
import "./bookmarks.css";

const Bookmarks = () => {
  const [showModal, setShowModal] = useState(false);
  const [moviesState, setMovies] = useLocalStorageState([], "movies");

  return (
    <div className="bookmarks">
      {showModal && <Modal showModal={showModal} setShowModal={setShowModal} />}
      {moviesState.length === 0 ? (
        <>
          <h5 className="no-bookmarks">No bookmarked movies yet.!</h5>
          <div className="no-bookmarks-img">
            <img src={notFound} alt="No film" />
          </div>
        </>
      ) : (
        <h2 className="bookmarks-title">
          my Bookmarks ( {moviesState.length} )
        </h2>
      )}
      {moviesState.map((movie) => (
        <BookmarkItem
          key={movie.imdbID}
          movie={movie}
          modal={setShowModal}
          setMovies={setMovies}
        />
      ))}
    </div>
  );
};

export default Bookmarks;
