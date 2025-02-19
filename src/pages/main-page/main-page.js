import { useEffect, useState } from "react";
import Card from "../../components/card/card";
import Modal from "../../components/modal/modal";
import UrlParams from "../../utils/urlParams/urlParams";
import Spinner from "../../components/spinner/spinner";
import NotFound from "../../components/not-found/not-found";
import useLocalStorageState from "../../hooks/use-localStorage-state";
import Pagination from "../../components/pagination/pagination";
import "./main-page.css";

const MainPage = ({ data, pagination }) => {
  const [showModal, setShowModal] = useState(false);
  const [moviesState, setMovies] = useLocalStorageState([], "movies");
  const { loading, movies, error } = data;
  const message = error?.errorMessage || "";

  useEffect(() => {
    const movieId = UrlParams.getId();
    if (movieId) setShowModal(true);
  }, []);

  if (loading) {
    return <Spinner />;
  } else if (message) {
    return <NotFound error={error} />;
  }

  return (
    <div className="main-page-container">
      {showModal && <Modal showModal={showModal} setShowModal={setShowModal} />}
      <div className="main-page-wrapper">
        {movies.map((movie) => (
          <Card
            key={movie.imdbID}
            data={movie}
            modal={setShowModal}
            setMovies={setMovies}
            moviesState={moviesState}
          />
        ))}
      </div>
      <Pagination pagination={pagination} />
    </div>
  );
};

export default MainPage;
