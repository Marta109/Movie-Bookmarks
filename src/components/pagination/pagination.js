import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../contexts/appContext";
import PaginationItems from "./pagination-items";
import "./pagination.css";

const Pagination = () => {
  const { state, dispatch } = useContext(AppContext);
  const { currentPage, total, limit } = state;

  const totalPages = Math.ceil(total / limit);
  console.log(currentPage);
  console.log(totalPages);

  const [pagesToShow, setPagesToShow] = useState([]);

  useEffect(() => {
    const pages = [];
    let startPage = Math.max(1, currentPage - Math.floor(limit / 2));
    let endPage = Math.min(totalPages, startPage + limit - 1);

    if (endPage - startPage < limit - 1) {
      startPage = Math.max(1, endPage - limit + 1);
    }

    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }

    setPagesToShow(pages);
  }, [currentPage, totalPages, limit]);

  const handlePrevPage = () => {
    if (currentPage > 1) {
      dispatch({ type: "SET_CURRENT_PAGE", payload: currentPage - 1 });
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      dispatch({ type: "SET_CURRENT_PAGE", payload: currentPage + 1 });
    }
  };

  const handlePageChange = (page) => {
    if (page !== currentPage) {
      dispatch({ type: "SET_CURRENT_PAGE", payload: page });
    }
  };

  return (
    <div aria-label="Pagination" className="pagination">
      <ul className="pagination">
        <li className={`page-item ${currentPage === 1 ? "disabled" : ""} btns`}>
          <button className="page-link" onClick={handlePrevPage}>
            Previous
          </button>
        </li>

        {pagesToShow.map((page) => (
          <PaginationItems
            key={page}
            pageNumber={page}
            activePage={currentPage}
            handlePageChange={handlePageChange}
          />
        ))}

        <li
          className={`page-item ${
            currentPage === totalPages ? "disabled" : ""
          } btns`}
        >
          <button className="page-link" onClick={handleNextPage}>
            Next
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Pagination;
