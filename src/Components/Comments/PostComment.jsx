import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { reduxForm } from 'redux-form';
import Input from '../Input/Input';
import Button from '../Button/Button';
import { addComment } from '../../Redux/Actions/PostsActions/BaseActions';

const PostComment = (props) => {
  const dispatch = useDispatch();
  const { handleSubmit, postId } = props;
  const SubmitForm = (values) => {
    // eslint-disable-next-line no-param-reassign
    values.postId = postId;
    dispatch(addComment(values));
  };
  return (
    <div className="accordion">
      <form onSubmit={handleSubmit(SubmitForm)}>
        <Input type="text" label="Your email" name="email" />
        <Input type="text" label="Your name" name="name" />
        <Input type="text" label="Your comment" name="body" />
        <Button type="submit" text="Send comment" />
      </form>
    </div>
  );
};

PostComment.propTypes = {
  postId: PropTypes.number,
  handleSubmit: PropTypes.func,
};

PostComment.defaultProps = {
  postId: 0,
  handleSubmit: PropTypes.func,
};

const CommentForm = reduxForm({
  form: 'comment',
})(PostComment);

export default CommentForm;
