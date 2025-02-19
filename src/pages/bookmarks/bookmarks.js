import { useContext, useState } from "react";
import { AppContext } from "../../contexts/appContext";
import BookmarkItem from "../../components/bookmarkItem/bookmarkItem";
import Modal from "../../components/modal/modal";
import notFound from "../../assets/images/notFound.webp";
import "./bookmarks.css";

const Bookmarks = () => {
  const [showModal, setShowModal] = useState(false);
  const { state, setFavorites } = useContext(AppContext);

  return (
    <div className="bookmarks">
      {showModal && <Modal showModal={showModal} setShowModal={setShowModal} />}
      {state.favorites.length === 0 ? (
        <>
          <h5 className="no-bookmarks">No bookmarked movies yet.!</h5>
          <div className="no-bookmarks-img">
            <img src={notFound} alt="No film" />
          </div>
        </>
      ) : (
        <h2 className="bookmarks-title">
          my Bookmarks ( {state.favorites.length} )
        </h2>
      )}
      {state.favorites.map((movie) => (
        <BookmarkItem
          key={movie.imdbID}
          movie={movie}
          modal={setShowModal}
          setFavorites={setFavorites}
        />
      ))}
    </div>
  );
};

export default Bookmarks;
