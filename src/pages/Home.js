import { useLazyQuery } from "@apollo/client";
import React, { useEffect, useState } from "react";
import { Video, Code, Post } from "../components";
import { GET_POSTS_QUERY } from "../graphql/Queries";
import CircularProgress from "@mui/material/CircularProgress";

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [getPosts, { loading, error }] = useLazyQuery(GET_POSTS_QUERY, {
    variables: { name: "hello" },
    onCompleted: (data) => {
      setPosts(data?.home);
    },
  });

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <React.Fragment>
      {loading ? (
        <CircularProgress size={50} />
      ) : (
        posts?.map((post, id) => {
          return <Post key={id} {...post} />;
        })
      )}
    </React.Fragment>
  );
};

export default Home;
