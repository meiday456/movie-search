import React from "react";
import createSagaMiddleware from "redux-saga";
import { configureStore } from "@reduxjs/toolkit";
import Colors from "./component/common/Colors";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

import Header from "./component/Header";
import Footer from "./component/Footer";
import ViewContainer from "./component/ViewContainer";
import { Provider } from "react-redux";
import rootSaga from "./store/saga/rootSaga";
import rootStore from "./store/reducers/rootReducer";
import { BrowserRouter } from "react-router-dom";

const GlobalStyles = createGlobalStyle`
  ${reset}
  body {
    margin: 0;
    font-family:  -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    --color-black: ${Colors.black};
    --color-white: ${Colors.white};
    --color-white-50: ${Colors.white50};
    --color-white-30: ${Colors.white30};
    --color-white-20: ${Colors.white20};
    --color-white-10: ${Colors.white10};
    --color-white-5: ${Colors.white5};
    --color-primary: ${Colors.b_primary};
    --color-hover: ${Colors.b_hover};
    --color-area: ${Colors.b_area};
    background-color: var(--color-black);
    line-height: 1.4;
    color: var(--color-white);
  }
  
`;

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: rootStore,
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

function App() {
  return (
    <React.StrictMode>
      <GlobalStyles />
      <Provider store={store}>
        <BrowserRouter>
          <Header />
          <ViewContainer />
          <Footer />
        </BrowserRouter>
      </Provider>
    </React.StrictMode>
  );
}

export default App;
