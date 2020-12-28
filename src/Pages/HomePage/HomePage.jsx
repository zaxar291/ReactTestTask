import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Post from '../../Components/Post/Post';
import { loadPosts } from '../../Redux/Actions/PostsActions/BaseActions';
import Loader from '../../Components/Loader/Loader';
import { postsSelector } from '../../Redux/Selectors/PostSelectors';
import loadingSelector from '../../Redux/Selectors/LoaderSelectors';

const HomePage = () => {
  const dispatch = useDispatch();
  const postsList = useSelector(postsSelector);
  const loading = useSelector(loadingSelector);
  useEffect(() => {
    if (!postsList.length) {
      dispatch(loadPosts());
    }
  }, []);
  if (loading || !postsList.length) {
    return (
      <Loader />
    );
  }
  return postsList.map(
    (post) => <Post id={post.id} title={post.title} body={post.body} key={post.id} />,
  );
};

export default HomePage;
