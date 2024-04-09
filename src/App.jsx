// App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "./pages/Signup";
import Profile from "./pages/Profile";
import Explore from "./pages/Explore";
import Dribbble from "./pages/Dribbble";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/dribbble" element={<Dribbble />} />
        <Route path="/" element={<Signup />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/explore" element={<Explore />} />
      </Routes>
    </Router>
  );
};

export default App;
