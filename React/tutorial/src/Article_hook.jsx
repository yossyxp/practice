import React, { useState } from "react";
import LikeButton_hook from "./LikeButton_hook";

const Article_hook = (props) => {
  const [isPublished, togglePublished] = useState(false);

  return (
    <>
      <h2>{props.title}</h2>
      <label htmlFor="check">公開状態：</label>
      <input
        type="checkbox"
        checked={isPublished}
        id="check"
        onClick={() => togglePublished(!isPublished)}
      />
      <LikeButton_hook/>
    </>
  );
};

export default Article_hook;
