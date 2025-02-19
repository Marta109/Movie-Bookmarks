import { useState } from "react";
import "./header.css";
const Header = ({ searchFilms, setCurrentPage }) => {
  const [search, setSearch] = useState("");
  const [activePage, setActivePage] = useState("home");

  const handleSubmit = (e) => {
    e.preventDefault();
    searchFilms(search);
    setCurrentPage("home");
    setActivePage("home");
  };

  const handleClick = (page) => {
    if (page === activePage) return;
    setActivePage(page);
    setCurrentPage(page);
  };

  return (
    <div className="app-header">
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a
            className="navbar-brand"
            href="#"
            onClick={() => handleClick("home")}
          >
            Movie Bookmarks
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarScroll"
            aria-controls="navbarScroll"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarScroll">
            <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">
              <li className="nav-item">
                <a
                  className={`nav-link ${
                    activePage === "home" ? "active" : ""
                  }`}
                  aria-current="page"
                  href="#"
                  onClick={() => handleClick("home")}
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={`nav-link ${
                    activePage !== "home" ? "active" : ""
                  }`}
                  href="#"
                  onClick={() => handleClick("bookmarks")}
                >
                  Bookmarks
                </a>
              </li>
            </ul>
            <form className="d-flex" role="search" onSubmit={handleSubmit}>
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search Films"
                aria-label="Search"
                onChange={(e) => setSearch(e.target.value)}
              />
              <button className="btn btn-outline" type="submit">
                <i className="fa-solid fa-magnifying-glass"></i>
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
