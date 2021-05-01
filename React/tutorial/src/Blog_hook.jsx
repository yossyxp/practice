import React from "react";
import Article_hook from "./Article_hook";

const Blog_hook = () => {

  const authorName = "yossyxp";
  return (
    <>
      <Article_hook
        title={"Reactの使い方"}
        order={3}
        author={authorName}
      />
      <Article_hook
        title={"Reactの使い方じゃないよん"}
        order={4}
        author={authorName}
      />
    </>
  );
};

export default Blog_hook;
