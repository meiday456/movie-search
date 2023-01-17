import {combineReducers} from "redux";
import viewMovieReducer from "./viewMovieReducer";

const viewStore = combineReducers({
  movie : viewMovieReducer
})

export default viewStore