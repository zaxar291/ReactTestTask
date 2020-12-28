const postsSelector = (state) => state.posts.postsList;
const commentsSelector = (state) => state.posts.commentsList;

export { postsSelector, commentsSelector };
