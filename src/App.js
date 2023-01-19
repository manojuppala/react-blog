import React from "react";
import Home from "./pages/Home";
import Articles from "./pages/Articles";
import Projects from "./pages/Projects";
import Opensource from "./pages/Opensource";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/opensource" element={<Opensource />} />
      </Routes>
      <Footer />
    </React.Fragment>
  );
}

export default App;
