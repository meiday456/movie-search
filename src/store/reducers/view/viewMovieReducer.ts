import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {ViewStoreState} from "../../../interface/MovieInterface";

const initialState: ViewStoreState = {
    activeMovieId: '',
    currentPage: 1,
    maxPage: 1,
    statusMessage : 'Search for the movie title!'
}

const viewMovieStore = createSlice({
    name: 'viewMovieStore',
    initialState,
    reducers: {
        updateActiveMovieId: (state: ViewStoreState = initialState, action: PayloadAction<string>) => {
            return {
                ...state, activeMovieId: action.payload
            }
        },
        updateCurrentPage(state: ViewStoreState = initialState, action: PayloadAction<number>) {
            state.currentPage = action.payload
        },
        updateMaxPage: (state: ViewStoreState = initialState, action: PayloadAction<number>) => {
            state.maxPage = action.payload
        },
        updateStatusMessage: (state: ViewStoreState = initialState, action: PayloadAction<string>) => {
            return {
                ...state, statusMessage: action.payload
            }
        },
    }
})

export const {updateActiveMovieId, updateCurrentPage, updateMaxPage,updateStatusMessage} = viewMovieStore.actions
export default viewMovieStore.reducer