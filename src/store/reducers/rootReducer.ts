import {combineReducers} from "redux";
import serverStore from "./server/serverRootReducer";
import viewStore from "./view/viewRootReducer";


const rootStore = combineReducers({
    server : serverStore,
    view : viewStore
})

export type RootState = ReturnType<typeof rootStore>
export default rootStore