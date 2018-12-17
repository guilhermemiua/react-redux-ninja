import React, { Component } from "react";
import axios from "axios";

class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: null,
      post: []
    };
  }

  componentDidMount() {
    let id = this.props.match.params.post_id;

    axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`).then(res => {
      this.setState({
        post: res.data
      });
    });
  }

  render() {
    const { post } = this.state;

    return (
      <div className="container">
        <h4> Route parameter </h4>
        <div className="post card" key={post.id}>
          <div className="card-content">
            <span className="card-title">{post.title}</span>
            <p> {post.body} </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Post;
