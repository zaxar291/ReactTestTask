import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Comment from '../../Components/Comments/Comment';
import { loadComments } from '../../Redux/Actions/PostsActions/BaseActions';
import Loader from '../../Components/Loader/Loader';
import { commentsSelector } from '../../Redux/Selectors/PostSelectors';
import loadingSelector from '../../Redux/Selectors/LoaderSelectors';

const Comments = () => {
  const dispatch = useDispatch();
  const commentsList = useSelector(commentsSelector);
  const loading = useSelector(loadingSelector);
  useEffect(() => {
    if (!commentsList.length) {
      dispatch(loadComments());
    }
  }, []);
  if (loading || !commentsList.length) {
    return (
      <Loader />
    );
  }

  return commentsList.map(
    (comment) => <Comment name={comment.name} email={comment.email} body={comment.body} />,
  );
};

export default Comments;
