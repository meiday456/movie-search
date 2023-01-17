import {combineReducers} from "redux";
import serverMovieReducer from "./serverMovieReducer";

const serverStore = combineReducers({
  movie : serverMovieReducer
})

export default serverStore