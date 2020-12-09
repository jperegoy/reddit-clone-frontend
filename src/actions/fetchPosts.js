/**
 * This is just syntactic sugar, but keep things as clean as possible.
 * Here, you can lean on impicit returns and single arguments to cut
 * some lines out, which add up over time.
 */
export const fetchPosts = () => dispatch => {
  dispatch({ type: 'LOADING_POST'})
};
