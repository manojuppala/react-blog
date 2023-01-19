import React from "react";
import Pagination from "../components/Pagination";
import Searchbar from "../components/Searchbar";
import ArticleCard from "../components/ArticleCard";
import articles from "../data/articles.json";
import "../styles/articles.css";

const Articles = () => {
  return (
    <React.Fragment>
      <Searchbar />
      <div className="card-deck">
        {articles.articles.map((article, id) => {
          return <ArticleCard key={id} {...article} />;
        })}
      </div>
      <Pagination />
    </React.Fragment>
  );
};

export default Articles;
