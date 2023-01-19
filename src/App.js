import React from "react";
import { Home, Articles, Projects, Opensource } from "./pages";
import { Navbar, Footer } from "./components";
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
