import React from 'react';
import logo from './logo.svg';
import './App.css';

import styled, {createGlobalStyle} from "styled-components"
import reset from "styled-reset"

import Header from "./component/Header";
import Footer from "./component/Footer";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./component/home";
import Movie from "./component/movie";
import About from "./component/about/About";

const GlobalStyles = createGlobalStyle`
  ${reset}
`;


function App() {
    return (
        <>
            <GlobalStyles/>
            <Header></Header>
            <React.StrictMode>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/movie" element={<Movie/>}/>
                        <Route path="/about" element={<About/>}/>
                    </Routes>
                </BrowserRouter>
            </React.StrictMode>
            <Footer></Footer>
        </>
    );
}

export default App;
