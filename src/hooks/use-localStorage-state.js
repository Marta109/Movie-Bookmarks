import { useEffect, useState } from "react";
import FilmApi from "../server/filmApi";

const useLocalStorageState = (initialState = [], key = "movies") => {
  const [value, setValue] = useState(() => {
    const storedValue = localStorage.getItem(key);
    return storedValue ? JSON.parse(storedValue) : initialState;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value, key]);

  const updateFavorites = (data, id) => {
    const isDelete = value.some((movie) => movie.imdbID === id);

    if (isDelete) {
      setValue((prevMovies) =>
        prevMovies.filter((movie) => movie.imdbID !== id)
      );
    } else {
      if (data.Country) {
        setValue((prevMovies) => [...prevMovies, data]);
      } else {
        FilmApi.getMovieById(id).then((movieData) => {
          if (movieData.success) {
            setValue((prevMovies) => [...prevMovies, movieData.data]);
          }
        });
      }
    }
  };

  return [value, updateFavorites];
};

export default useLocalStorageState;
