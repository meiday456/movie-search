import {all, call, fork, put, takeLatest} from "redux-saga/effects"
import * as MovieActions from "./movieAction"
import {PayloadAction} from "@reduxjs/toolkit";
import {MovieList, MovieParam} from "../../interface/MovieInterface";
import {fetchMovie} from "./apis";
import {updateMovieListInfo,updateInfoLoading,updateListLoading} from "../reducers/server/serverMovieReducer";
import {updateCurrentPage, updateMaxPage, updateStatusMessage} from "../reducers/view/viewMovieReducer";

const fetchMovieList = function* (action :PayloadAction<MovieParam>){
    yield put(updateListLoading(true))
    yield put(updateStatusMessage(''))
    try{
        const response : MovieList = yield call(fetchMovie , action.payload)

        const {Response,totalResults, Error}  = response

        if (Response === 'True') {
            yield put(updateMovieListInfo(response))
            yield put(updateMaxPage(Math.ceil(Number(totalResults) / 10)))
        }else {
            yield put(updateMovieListInfo(null))
            yield put(updateCurrentPage(1))
            yield put(updateMaxPage(1))
            yield put(updateStatusMessage(Error!))
        }


    }catch(error){
        alert("fail to fetch movie list ")
    }finally {
        yield put(updateListLoading(false))
    }
}

const fetchMovieInfoById = function* (action :PayloadAction<MovieParam>){
    console.log('do search Info')
}


function* watchMovie(){
    yield takeLatest(MovieActions.actions.fetchMovieList , fetchMovieList)
    yield takeLatest(MovieActions.actions.fetchMovieInfo , fetchMovieInfoById)
}

export default function* rootSaga(){
    yield all([fork(watchMovie)])
}

