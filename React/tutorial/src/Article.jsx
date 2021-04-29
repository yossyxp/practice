import React from "react";
import LikeButton from "./LikeButton";

const Article = (props) => {
  let publishState = "";
  if (props.isPublished) {
    publishState = "公開";
  } else {
    publishState = "非公開";
  }
  return (
    <>
      <h2>{props.title}</h2>
      <p>順番は{props.order}です．</p>
      <p>著者：{props.author}</p>
      <p>{publishState}</p>
      <label htmlFor="check">公開状態：</label>
      <input
        type="checkbox"
        checked={props.isPublished}
        id="check"
        onClick={() => props.toggle()}
      />
      <LikeButton count={props.count}/>
    </>
  );
};

export default Article;
