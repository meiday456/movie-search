import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./home";
import Movie from "./movie";
import About from "./about/About";
import NotFound from "./notFound/NotFound";
import React from "react";

const ViewContainer = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate replace to="/search" />} />
      <Route path="/search" element={<Home />} />
      <Route path="/movie" element={<Movie />} />
      <Route path="/about" element={<About />} />
      <Route path="/*" element={<NotFound />} />
    </Routes>
  );
};

export default ViewContainer;
