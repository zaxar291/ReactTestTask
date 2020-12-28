import { combineReducers } from 'redux';
import { reducer as FormReducer } from 'redux-form';
import LoaderReducer from './LoaderReducer/LoaderReducer';
import PostsReducer from './PostsReducer/PostsReducer';
import UsersReducer from './UsersReducer/UsersReducer';

const RootReducer = combineReducers({
  posts: PostsReducer,
  loader: LoaderReducer,
  user: UsersReducer,
  form: FormReducer,
});

export default RootReducer;
