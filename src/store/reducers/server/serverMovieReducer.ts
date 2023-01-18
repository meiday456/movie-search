import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {MovieInfo, MovieInfoById, MovieList, ServerStoreState} from "../../../interface/MovieInterface";

const initialState: ServerStoreState = {
    movieList: [],
    movieInfo: null,
    infoLoading: false,
    listLoading: false,
}

const serverMovieStore = createSlice({
    name: 'serverMovieStore',
    initialState,
    reducers: {
        updateMovieList(state: ServerStoreState = initialState, action: PayloadAction<MovieInfo[]>) {
            state.movieList = action.payload
        },
        updateMovieInfo: (state: ServerStoreState = initialState, action: PayloadAction<MovieInfoById | null>) => {
            state.movieInfo = action.payload
        },
        updateInfoLoading(state: ServerStoreState = initialState, action: PayloadAction<boolean>) {
            state.infoLoading = action.payload
        },
        updateListLoading(state: ServerStoreState = initialState, action: PayloadAction<boolean>) {
            state.listLoading = action.payload
        }
    }
})

export const {
    updateMovieList, updateInfoLoading,
    updateListLoading, updateMovieInfo
} = serverMovieStore.actions
export default serverMovieStore.reducer