import React from "react";
import Article from "./Article";

class Blog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isPublished: false,
      count: 0,
    };
  }

  //　公開状態を反転させる関数
  togglePublished = () => {
    this.setState({
      isPublished: !this.state.isPublished,
    });
  };

  componentDidMount() {
    document.getElementById("counter").addEventListener("click", this.countUp); // イベントリスナーの設置
  }

  componentDidUpdate() {
    if (this.state.count >= 10) {
      this.setState({ count: 0 }); // いいね数が10になったらリセット(Likebuttonコンポーネントが再レンダー後に呼ばれる)
    }
  }

  componentWillUnmount() {
    document
      .getElementById("counter")
      .removeEventListener("click", this.coutUp); // 目視で確認できないけど，やっとくといいよね
  }

  countUp = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  render() {
    const authorName = "yossyxp";
    return (
      <>
        <Article
          title={"Reactの使い方"}
          order={3}
          isPublished={this.state.isPublished}
          author={authorName}
          toggle={() => this.togglePublished()} // 関数の形で渡す
          count={this.state.count}
        />
        <Article
          title={"Reactの使い方じゃないよん"}
          order={4}
          isPublished={this.state.isPublished}
          author={authorName}
        />
      </>
    );
  }
}

export default Blog;
