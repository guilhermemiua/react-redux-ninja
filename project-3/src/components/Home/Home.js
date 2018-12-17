import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    };
  }

  componentDidMount() {
    axios.get("https://jsonplaceholder.typicode.com/posts").then(res => {
      this.setState({
        posts: res.data.slice(0, 10)
      });
    });
  }

  render() {
    const postList = this.state.posts.length ? (
      this.state.posts.map(post => {
        return (
          <div onClick={this.handleClick} className="post card" key={post.id}>
            <div className="card-content">
              <Link
                to={`https://jsonplaceholder.typicode.com/posts/${post.id}`}
              >
                <span className="card-title">{post.title}</span>
              </Link>
              <p> {post.body} </p>
            </div>
          </div>
        );
      })
    ) : (
      <div className="center"> No posts yet </div>
    );

    return (
      <div className="container">
        <h4 className="center"> Home </h4>
        {postList}
      </div>
    );
  }
}

export default Home;
