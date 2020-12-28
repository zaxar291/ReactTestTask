import {
  LOAD_POSTS, SHOW_LOADER, HIDE_LOADER, SHOW_MESSAGE, LOAD_COMMENTS,
} from '../../ActionTypes/Actions';
import HttpManager from '../../../Services/ConnectionService';
import { ApiCommentsUrl, ApiPostsUrl } from '../../../App/Consts';

export function loadPosts() {
  return async (dispatch) => {
    dispatch({ type: SHOW_LOADER });
    try {
      const posts = await HttpManager.get(ApiPostsUrl);
      dispatch({ type: LOAD_POSTS, posts });
      dispatch({ type: HIDE_LOADER });
    } catch (e) {
      console.log(e);
    }
  };
}

export function loadComments() {
  return async (dispatch) => {
    dispatch({ type: SHOW_LOADER });
    try {
      const comments = await HttpManager.get(ApiCommentsUrl);
      dispatch({ type: LOAD_COMMENTS, comments });
      dispatch({ type: HIDE_LOADER });
    } catch (e) {
      console.log(e);
    }
  };
}

export function addComment(comment) {
  return async (dispatch) => {
    dispatch({ type: SHOW_LOADER });
    try {
      await HttpManager.post(`${ApiPostsUrl}/${comment.postId}${ApiCommentsUrl}`, {
        name: comment.name,
        email: comment.email,
        body: comment.body,
      });
      dispatch({ type: HIDE_LOADER });
      dispatch({ type: SHOW_MESSAGE, message: 'Comment successfully added!', messageType: 'success' });
    } catch (e) {
      console.log(e);
    }
  };
}
