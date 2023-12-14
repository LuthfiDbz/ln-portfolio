import React from "react";
import {
  Routes,
  Navigate,
  Route,
} from "react-router-dom";
import Home from "../pages/Hero";

export const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
};
