import { useEffect, useState, useContext } from "react";
import Card from "../../components/card/card";
import Modal from "../../components/modal/modal";
import UrlParams from "../../utils/urlParams/urlParams";
import Spinner from "../../components/spinner/spinner";
import NotFound from "../../components/not-found/not-found";
import { AppContext } from "../../contexts/appContext";
// import useLocalStorageState from "../../hooks/use-localStorage-state";
import Pagination from "../../components/pagination/pagination";
import "./main-page.css";

const MainPage = () => {
  const { state } = useContext(AppContext);
  const [showModal, setShowModal] = useState(false);
  // const [moviesState, setMovies] = useLocalStorageState([], "movies");
  const { loading, data, error } = state;
  console.log(data);
  const message = error || "";

  useEffect(() => {
    const movieId = UrlParams.getId();
    if (movieId) setShowModal(true);
  }, []);

  if (loading) {
    return <Spinner />;
  } else if (message) {
    return <NotFound />;
  }

  return (
    <div className="main-page-container">
      {showModal && <Modal showModal={showModal} setShowModal={setShowModal} />}
      <div className="main-page-wrapper">
        {data.map((movie) => (
          <Card
            key={movie.imdbID}
            data={movie}
            // setMovies={setMovies}
            // moviesState={moviesState}
            setShowModal={setShowModal}
          />
        ))}
      </div>
      <Pagination />
    </div>
  );
};

export default MainPage;
