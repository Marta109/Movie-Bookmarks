import { useState, useEffect } from "react";
import FilmApi from "../../server/filmApi";

export const useApp = () => {
  const [loading, setLoading] = useState(true);
  const [originalData, setOriginalData] = useState([]);
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("movie");
  const [currentPage, setCurrentPage] = useState(1);
  const [error, setError] = useState(false);
  const [total, setTotal] = useState(null);

  useEffect(() => {
    setLoading(true);
    FilmApi.getMoviesBySearch(search, currentPage)
      .then((data) => {
        if (data.success) {
          if (originalData.length === 0) {
            setOriginalData(data.data.Search);
            setTotal(data.total);
          }
          setData(data.data.Search);
          setError(false);
          setTotal(data.total);
        } else {
          setError(data.error);
        }
      })
      .finally(() => setLoading(false));
  }, [search, currentPage]);

  const searchHandler = (newSearch) => {
    if (search === newSearch) return;
    setSearch(newSearch);
    if (newSearch === "") {
      setData(originalData);
    }
  };

  return {
    header: searchHandler,
    loading,
    movies: data,
    error: {
      errorMessage: error,
      setError,
    },
    pagination: {
      currentPage,
      limit: 8,
      total,
      setCurrentPage,
    },
  };
};
