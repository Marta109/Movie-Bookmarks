import { useEffect, useState } from "react";
import PaginationItems from "./pagination-items";
import "./pagination.css";
const Pagination = ({
  pagination: { setCurrentPage, currentPage, limit, total },
}) => {
  const [ItemNum, setItemNum] = useState({
    start: currentPage,
    end: currentPage + limit,
  });
  const [items, setItems] = useState([]);

  const lastItemNum = Math.floor(total / limit);

  useEffect(() => {
    setItems(Array.from({ length: limit }, (_, i) => i + ItemNum.start));
  }, [ItemNum, limit]);

  const handlePrevPage = () => {
    if (ItemNum.start > 1) {
      setItemNum({
        start: ItemNum.start - 1,
        end: ItemNum.end - 1,
      });
    }
  };

  const handleNextPage = () => {
    if (ItemNum.end < lastItemNum) {
      setItemNum({
        start: ItemNum.start + 1,
        end: ItemNum.end + 1,
      });
    }
  };

  const handlePageChange = (page) => {
    if (page === currentPage) return;
    setCurrentPage(page);
  };

  const elements = items.map((el) => {
    return (
      <PaginationItems
        key={el}
        pageNumber={el}
        activePage={currentPage}
        handlePageChange={handlePageChange}
      />
    );
  });

  return (
    <div aria-label="..." className="pagination">
      <ul className="pagination">
        <li
          className={`page-item ${ItemNum.start === 1 ? "disabled" : ""} btns`}
        >
          <button className=" page-link" onClick={handlePrevPage}>
            Previous
          </button>
        </li>
        {elements}
        <li
          className={`page-item ${
            ItemNum.end === lastItemNum ? "disabled" : ""
          } btns`}
        >
          <button className=" page-link" onClick={handleNextPage}>
            Next
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Pagination;
