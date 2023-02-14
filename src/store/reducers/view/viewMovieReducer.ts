import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ViewStoreState } from "../../../interface/MovieInterface";
import { isDark } from "../../../const/config";

const initialState: ViewStoreState = {
  searchText: "",
  activeMovieId: "",
  currentPage: 1,
  maxPage: 1,
  statusMessage: "Search for the movie title!",
  isDark: isDark(),
};

const viewMovieStore = createSlice({
  name: "viewMovieStore",
  initialState,
  reducers: {
    updateActiveMovieId: (
      state: ViewStoreState = initialState,
      action: PayloadAction<string>
    ) => {
      return {
        ...state,
        activeMovieId: action.payload,
      };
    },
    updateCurrentPage(
      state: ViewStoreState = initialState,
      action: PayloadAction<number>
    ) {
      state.currentPage = action.payload;
    },
    updateMaxPage: (
      state: ViewStoreState = initialState,
      action: PayloadAction<number>
    ) => {
      state.maxPage = action.payload;
    },
    updateStatusMessage: (
      state: ViewStoreState = initialState,
      action: PayloadAction<string>
    ) => {
      return {
        ...state,
        statusMessage: action.payload,
      };
    },
    updateSearchText: (
      state: ViewStoreState = initialState,
      action: PayloadAction<string>
    ) => {
      return {
        ...state,
        searchText: action.payload,
      };
    },
    updateIsDark: (
      state: ViewStoreState = initialState,
      action: PayloadAction<boolean>
    ) => {
      return {
        ...state,
        isDark: action.payload,
      };
    },
  },
});

export const {
  updateActiveMovieId,
  updateCurrentPage,
  updateMaxPage,
  updateStatusMessage,
  updateSearchText,
  updateIsDark,
} = viewMovieStore.actions;
export default viewMovieStore.reducer;
