import { useEffect, useState, useContext } from "react";
import { useSearchParams } from "react-router";
import Card from "../../components/card/card";
import Modal from "../../components/modal/modal";
import Spinner from "../../components/spinner/spinner";
import NotFound from "../../components/not-found/not-found";
import { AppContext } from "../../contexts/appContext";
import Pagination from "../../components/pagination/pagination";
import "./main-page.css";

const MainPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { state } = useContext(AppContext);
  const [showModal, setShowModal] = useState(false);
  const { loading, data, error } = state;
  const message = error || "";

  useEffect(() => {
    const movieID = searchParams.get("movieId");
    if (movieID) setShowModal(true);
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
          <Card key={movie.imdbID} data={movie} setShowModal={setShowModal} />
        ))}
      </div>
      <Pagination />
    </div>
  );
};

export default MainPage;
