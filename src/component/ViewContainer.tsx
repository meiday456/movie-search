import {BrowserRouter, Route, Routes, Navigate} from "react-router-dom";
import Home from "./home";
import Movie from "./movie";
import About from "./about/About";
import NotFound from "./notFound/NotFound";
import React from "react";
import Header from "./Header";


const ViewContainer =  ()=>{
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/"  element={<Navigate replace to="/search"/>}/>
                <Route path="/search"  element={<Home/>}/>
                <Route path="/movie" element={<Movie/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/*" element={<NotFound/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default ViewContainer