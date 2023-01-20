import React, { useEffect } from "react";
import { Home, Articles, Projects, Opensource, ArticleTemplate } from "./pages";
import { Navbar, Footer } from "./components";
import { Route, Routes } from "react-router-dom";
import "highlight.js/styles/github-dark-dimmed.css";
import hljs from "highlight.js";

function App() {
  useEffect(() => {
    hljs.highlightAll();
  }, []);

  return (
    <React.Fragment>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/articles/:id" element={<ArticleTemplate />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/opensource" element={<Opensource />} />
      </Routes>
      <Footer />
    </React.Fragment>
  );
}

export default App;
