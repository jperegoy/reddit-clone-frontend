import React from 'react';

/**
 * RP: renders a list of all posts
 * RP: functional components have to pass props in as the argument instead of this.props
 * 
 * _Technically_, it can be called anything you want, not just `props`. You may see `data`
 * used in this fashion too. If it is the only arg coming in, you can omit the parens,
 * but you'll want those back when you destructure the props this receives.
 * 
 * Also, we can wrap the component body in parens and leverage the implicit return
 * of the function thanks to ES6.
 */
const Posts = props => (
  <div>
    Posts
  </div>
);

export default Posts;
