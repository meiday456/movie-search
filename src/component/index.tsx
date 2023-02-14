import React from "react";
import Header from "./Header";
import ViewContainer from "./ViewContainer";
import Footer from "./Footer";
import { BrowserRouter } from "react-router-dom";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import reset from "styled-reset";
import Theme from "./common/Theme";
import { useSelector } from "react-redux";
import { RootState } from "../store/reducers/rootReducer";

const GlobalStyles = createGlobalStyle`
  ${reset}
  body {
    margin: 0;
    font-family:  -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    --color-background :${(props) => props.theme.main.background}; 
    --color-black: ${(props) => props.theme.black};
    --color-white: ${(props) => props.theme.white};
    --color-white-50: ${(props) => props.theme.white50};
    --color-white-30: ${(props) => props.theme.white30};
    --color-white-20: ${(props) => props.theme.white20};
    --color-white-10: ${(props) => props.theme.white10};
    --color-white-5: ${(props) => props.theme.white5};
    --color-primary: ${(props) => props.theme.primary};
    --color-hover: ${(props) => props.theme.hover};
    --color-area: ${(props) => props.theme.area};
    background-color: var(--color-background);
    line-height: 1.4;
    color: ${(props) => props.theme.font};
  }
  
`;

const Main = () => {
  const pageDark = useSelector((state: RootState) => state.view.movie.isDark);
  return (
    <ThemeProvider theme={Theme(pageDark)}>
      <GlobalStyles />
      <BrowserRouter>
        <Header />
        <ViewContainer />
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default Main;
