import React, { useState, useEffect } from "react";

const LikeButton_hook = () => {
  const [count, counter] = useState(0); // const[state 変数名, state 変更関数名] = useState(state 初期値)
  const [limit, release] = useState(true);

  const countUp = () => {
    counter(count + 1);
  };

  useEffect(() => {
    document.getElementById("counter").addEventListener("click", countUp); // componentDidMount()の部分
    if (count >= 10) {
      counter(0);
    }
    return () => {
      document.getElementById("counter").removeEventListener("click", countUp); // componentWillUpdate()の部分
    };
  }, [limit]); // limitというstateが変更した時に実行

  return (
    <>
      <button id={"counter"}>いいね数： {count}</button>
      <button onClick={() => release(!limit)}>もっといいねしたい！</button>
    </>
  );
};

export default LikeButton_hook;
