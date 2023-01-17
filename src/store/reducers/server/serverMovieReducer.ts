import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {MovieList, ServerStoreState} from "../../../interface/MovieInterface";

const initialState: ServerStoreState = {
    movieListInfo: null,
    infoLoading: false,
    listLoading: false,
}

const serverMovieStore = createSlice({
    name: 'serverMovieStore',
    initialState,
    reducers: {
        updateMovieListInfo(state: ServerStoreState = initialState, action: PayloadAction<MovieList | null>) {
            state.movieListInfo = action.payload
        },
        updateInfoLoading(state: ServerStoreState = initialState, action: PayloadAction<boolean>) {
            state.infoLoading = action.payload
        },
        updateListLoading(state: ServerStoreState = initialState, action: PayloadAction<boolean>) {
            state.listLoading = action.payload
        }
    }
})

export const {updateMovieListInfo, updateInfoLoading, updateListLoading} = serverMovieStore.actions
export default serverMovieStore.reducer