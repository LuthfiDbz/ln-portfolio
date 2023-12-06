import React from "react";
import {
  Routes,
  Navigate,
  Route,
} from "react-router-dom";
import Home from "../pages/Home";

export const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
};
