import { createAction } from "@reduxjs/toolkit";
import { MovieParam } from "../../interface/MovieInterface";

const types = {
  FETCH_MOVIE_LIST: `FETCH_MOVIE_LIST`,
  FETCH_MOVIE_INFO: `FETCH_MOVIE_INFO`,
};
const actions = {
  fetchMovieList: createAction<MovieParam>(types.FETCH_MOVIE_LIST),
  fetchMovieInfo: createAction<MovieParam>(types.FETCH_MOVIE_INFO),
};

export { types, actions };
