import React from "react";
import createSagaMiddleware from "redux-saga";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import rootSaga from "./store/saga/rootSaga";
import rootStore from "./store/reducers/rootReducer";
import Main from "./component";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: rootStore,
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

function App() {
  return (
    <React.StrictMode>
      <Provider store={store}>
        <Main />
      </Provider>
    </React.StrictMode>
  );
}

export default App;
