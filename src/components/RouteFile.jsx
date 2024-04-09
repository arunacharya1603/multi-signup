import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Explore from "../pages/Explore";
import Signup from "../pages/Signup";
import Dribbble from "../pages/Dribbble";
import Profile from "../pages/Profile";

const RouteFile = () => {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<Dribbble />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/explore" element={<Explore />} />
      </Routes>
    </Router>
  );
};

export default RouteFile;
