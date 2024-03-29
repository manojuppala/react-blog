import { Fragment } from "react";
import { ArticleCard, Code, Image, Pagination, Searchbar } from "./components";
import "./styles/articles.css";

const articles = [
  {
    title: "My first blog",
    date: "Aug 18, 2020",
    preview:
      "This is my first blog on this site. this website is under development. stay tuned for more content.",
    tags: ["linux", "tech"],
  },
];

const Blog = (): JSX.Element => {
  return (
    <Fragment>
      <Searchbar />
      <div className="card-deck">
        {articles.map((article, id) => {
          return <ArticleCard key={id} {...article} />;
        })}
      </div>
      <Pagination />
    </Fragment>
  );
};

export default Blog;
