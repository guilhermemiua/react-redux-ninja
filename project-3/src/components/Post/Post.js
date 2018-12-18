import React, { Component } from "react";
import { connect } from "react-redux";
import { deletePost } from "../../actions/PostActions";

class Post extends Component {
  handleClick = () => {
    this.props.deletePost(this.props.post.id);
    this.props.history.push("/");
  };

  render() {
    const post = this.props.post ? (
      <div className="post">
        <h4 className="center">{this.props.post.title}</h4>
        <p>{this.props.post.body}</p>
        <div className="center">
          <button className="btn grey" onClick={this.handleClick}>
            Delete Post
          </button>
        </div>
      </div>
    ) : (
      <div className="center">Loading post...</div>
    );

    return <div className="container">{post}</div>;
  }
}

// Returns a object that contains the data that the component needs
// Receives a state and optionally the ownProps
const mapStateToProps = (state, ownProps) => {
  let id = ownProps.match.params.post_id;
  const { posts } = state;

  return {
    post: posts.find(post => post.id === id)
  };
};

// Fires the action to reducer, the reducer will change the state
const mapDispatchToProps = dispatch => {
  return {
    deletePost: id => {
      dispatch(deletePost(id));
    }
  };
};

// Connects the component to the store
// Any time that the store is updated, the mapStateToProps will be subscribed
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Post);
/* Does not listen to the store
export default connect(mapStateToProps)(Post);
*/
