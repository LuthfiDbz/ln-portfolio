import React from "react";
import {
  Routes,
  Route,
} from "react-router-dom";
import Home from "../pages/Home";
import ProgresBar from "../components/Loader/ProgresBar";

export const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
};
