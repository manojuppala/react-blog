import React, { useEffect } from "react";
import Layout from "./Blog";
import "highlight.js/styles/github-dark-dimmed.css";
import hljs from "highlight.js";
import { Footer, Navbar } from "./components";

function App() {
  useEffect(() => {
    hljs.highlightAll();
  }, []);

  return (
    <React.Fragment>
      <Navbar />
      <Layout />
      <Footer />
    </React.Fragment>
  );
}

export default App;
