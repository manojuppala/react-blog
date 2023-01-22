import React, { useEffect } from "react";
import { Home, Articles, Projects, Opensource, ArticleTemplate } from "./pages";
import { Navbar, Footer } from "./components";
import { Route, Routes } from "react-router-dom";
import "highlight.js/styles/github-dark-dimmed.css";
import hljs from "highlight.js";
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

function App() {
  useEffect(() => {
    hljs.highlightAll();
  }, []);
  console.log(process.env.REACT_APP_HASURA_URI, process.env.REACT_APP_HASURA_ADMIN_SECRET);
  const httpLink = createHttpLink({
    uri: process.env.REACT_APP_HASURA_URI,
  });
  const authLink = setContext((_, { headers }) => {
    return {
      headers: {
        ...headers,
        "x-hasura-admin-secret": process.env.REACT_APP_HASURA_ADMIN_SECRET,
      },
    };
  });

  const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
  });

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
