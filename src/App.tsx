import React from 'react';
import createSagaMiddleware from "redux-saga";
import {configureStore} from "@reduxjs/toolkit";

import {createGlobalStyle} from "styled-components"
import reset from "styled-reset"

import Header from "./component/Header";
import Footer from "./component/Footer";
import ViewContainer from "./component/ViewContainer";
import {Provider} from "react-redux";
import rootSaga from "./store/saga/rootSaga";
import rootStore from "./store/reducers/rootReducer";
import {BrowserRouter} from "react-router-dom";

const GlobalStyles = createGlobalStyle`
  ${reset}
`;

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: rootStore,
    middleware: [sagaMiddleware]
})

sagaMiddleware.run(rootSaga);

function App() {
    return (
        <React.StrictMode>
            <GlobalStyles/>
            <Provider store={store}>
                <BrowserRouter>
                <Header/>
                <ViewContainer/>
                <Footer/>
                </BrowserRouter>
            </Provider>
        </React.StrictMode>
    );
}

export default App;
