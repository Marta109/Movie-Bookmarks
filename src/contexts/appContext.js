import { createContext, useReducer, useEffect } from "react";
import FilmApi from "../server/filmApi";
import useLocalStorageState from "../hooks/use-localStorage-state";

const initialState = {
  loading: true,
  originalData: [],
  originalTotal: 0,
  data: [],
  search: "dark",
  currentPage: 1,
  error: false,
  total: null,
  limit: 8,
  favorites: [],
};

function appReducer(state, action) {
  switch (action.type) {
    case "SET_LOADING":
      return { ...state, loading: action.payload };
    case "SET_MOVIES":
      return {
        ...state,
        data: action.payload,
        originalData:
          state.originalData.length === 0 ? action.payload : state.originalData,
        total: action.total,
        originalTotal: action.total,
      };
    case "SET_ERROR":
      return { ...state, error: action.payload };
    case "SET_SEARCH":
      return { ...state, search: action.payload };
    case "SET_CURRENT_PAGE":
      return { ...state, currentPage: action.payload };
    case "SET_FAVORITES":
      return { ...state, favorites: action.payload };
    default:
      return state;
  }
}

export const AppContext = createContext();

export function AppProvider({ children }) {
  const [state, dispatch] = useReducer(appReducer, initialState);
  const [favorites, setFavorites] = useLocalStorageState([], "movies");

  useEffect(() => {
    dispatch({ type: "SET_FAVORITES", payload: favorites });
  }, [favorites]);

  useEffect(() => {
    dispatch({ type: "SET_LOADING", payload: true });
    FilmApi.getMoviesBySearch(state.search, state.currentPage)
      .then((data) => {
        if (data.success) {
          dispatch({
            type: "SET_MOVIES",
            payload: data.data.Search,
            total: data.total,
          });
          dispatch({ type: "SET_ERROR", payload: false });
        } else {
          dispatch({ type: "SET_ERROR", payload: data.error });
          if (data.error) {
            dispatch({
              type: "SET_MOVIES",
              payload: state.originalData,
              total: state.originalTotal,
            });
          }
        }
      })
      .finally(() => dispatch({ type: "SET_LOADING", payload: false }));
  }, [state.search, state.currentPage]);

  const searchHandler = (newSearch) => {
    if (state.search === newSearch) return;
    dispatch({ type: "SET_SEARCH", payload: newSearch });
    dispatch({ type: "SET_CURRENT_PAGE", payload: 1 });
    if (newSearch === "") {
      dispatch({
        type: "SET_MOVIES",
        payload: state.originalData,
        total: state.total,
      });
    }
  };

  return (
    <AppContext.Provider
      value={{ state, dispatch, searchHandler, setFavorites }}
    >
      {children}
    </AppContext.Provider>
  );
}
