import React from 'react';
import { connect } from 'react-redux';

import { fetchPosts } from '../actions/fetchPosts';
import Posts from '../components/Posts';
import PostInput from '../components/PostInput'

class PostsContainer extends React.Component {
  componentDidMount() {
    this.state.fetchPosts()
  };

  render() {
    return (
      <div>
        <PostInput />
        <Posts />
      </div>
    )
  }
}

/**
 * RP: to see it, we want to map the state to props. 
 * RP: state is the state from the redux store
 * 
 * This may need to open up again, but for now it is simple
 * enough to just implicitly return an object and we can
 * deconstruct posts out or the arg we send it.
 */
const mapStateToProps = ({ posts }) => ({
  posts,
});

//{ fetchPosts } is equivalent to having a mapDispatchToProps function
export default connect(mapStateToProps, { fetchPosts })(PostsContainer);
