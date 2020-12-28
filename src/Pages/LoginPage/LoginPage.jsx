import React from 'react';
import PropTypes from 'prop-types';
import { reduxForm } from 'redux-form';
import { useDispatch, useSelector } from 'react-redux';
import Input from '../../Components/Input/Input';
import Button from '../../Components/Button/Button';
import { EmailRegEx } from '../../App/Consts';
import { LoginUser } from '../../Redux/Actions/UserActions/UserActions';
import Message from '../../Components/Message/Message';
import { messageSelector, messageTypeSelector } from '../../Redux/Selectors/UserSelectors';

const LoginForm = (props) => {
  const dispatch = useDispatch();
  const SubmitForm = (values) => {
    dispatch(LoginUser(values));
  };
  const { handleSubmit } = props;
  const message = useSelector(messageSelector);
  const messageType = useSelector(messageTypeSelector);
  return (
    <div className="container pt-3">
      {message && messageType && <Message message={message} messageType={messageType} />}
      <form onSubmit={handleSubmit(SubmitForm)}>
        <Input type="text" name="email" label="Your email" />
        <Input type="password" name="password" label="Your password" />
        <Button text="Login" />
      </form>
    </div>
  );
};

LoginForm.propTypes = {
  handleSubmit: PropTypes.func,
};
LoginForm.defaultProps = {
  handleSubmit: PropTypes.func,
};

const validate = (values) => {
  const errors = {};
  if (!EmailRegEx.test(values.email)) {
    errors.email = 'Email you entered is invalid!';
  }
  return errors;
};

const LoginPage = reduxForm({
  form: 'login',
  validate,
})(LoginForm);

export default LoginPage;
