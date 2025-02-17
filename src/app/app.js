import { useState } from "react";
import MainPage from "../pages/main-page/main-page";
import Header from "../components/header/header";
import Bookmarks from "../pages/bookmarks/bookmarks";
import { useApp } from "../components/use-app/use-app";
import "./app.css";

function App() {
  const { header, loading, movies, error, pagination } = useApp();
  const [currentPage, setCurrentPage] = useState("home");

  return (
    <div className="App">
      <Header searchFilms={header} setCurrentPage={setCurrentPage} />
      {currentPage === "home" ? (
        <MainPage data={{ loading, movies, error }} pagination={pagination} />
      ) : (
        <Bookmarks />
      )}
    </div>
  );
}

export default App;
