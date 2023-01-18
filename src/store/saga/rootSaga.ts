import {all, call, fork, put,select, takeLatest} from "redux-saga/effects"
import * as MovieActions from "./movieAction"
import {PayloadAction} from "@reduxjs/toolkit";
import {MovieInfo, MovieInfoById, MovieList, MovieParam} from "../../interface/MovieInterface";
import {fetchMovie} from "./apis";
import {
    updateMovieList,
    updateInfoLoading,
    updateListLoading,
    updateMovieInfo
} from "../reducers/server/serverMovieReducer";
import {updateCurrentPage, updateMaxPage, updateStatusMessage} from "../reducers/view/viewMovieReducer";
import {RootState} from "../reducers/rootReducer";

const fetchMovieList = function* (action: PayloadAction<MovieParam>) {
    yield put(updateListLoading(true))
    yield put(updateStatusMessage(''))

    if (action.payload.page === 1) {//초기화
        yield put(updateCurrentPage(1))
        yield put(updateMovieList([]))
    }
    const s:string = yield select((state:RootState) => state.view.movie.searchText)
    const storeMovieList: MovieInfo[] = yield select((state:RootState) => state.server.movie.movieList)
    try {
        const response: MovieList = yield call(fetchMovie, {
            ...action.payload,
            s : s
        })

        const {Response, totalResults, Error} = response

        if (Response === 'True') {
            yield put(updateMovieList(  [...storeMovieList ,...response.Search]))
            yield put(updateMaxPage(Math.ceil(Number(totalResults) / 10)))
        } else {
            yield put(updateMovieList([]))
            yield put(updateCurrentPage(1))
            yield put(updateMaxPage(1))
            yield put(updateStatusMessage(Error!))
        }


    } catch (error) {
        alert("fail to fetch movie list ")
    } finally {
        yield put(updateListLoading(false))
    }
}

const fetchMovieInfoById = function* (action: PayloadAction<MovieParam>) {

    yield put(updateInfoLoading(true))

    try{
        const response : MovieInfoById = yield call(fetchMovie,action.payload)
        yield put(updateMovieInfo(response))

    }catch(error){
        alert("fail to fetch movie info ")
        yield put(updateMovieInfo(null))
    }finally {
        yield put(updateInfoLoading(false))
    }

}


function* watchMovie() {
    yield takeLatest(MovieActions.actions.fetchMovieList, fetchMovieList)
    yield takeLatest(MovieActions.actions.fetchMovieInfo, fetchMovieInfoById)
}

export default function* rootSaga() {
    yield all([fork(watchMovie)])
}

