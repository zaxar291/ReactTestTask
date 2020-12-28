import React from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import { reduxForm } from 'redux-form';
import { useDispatch } from 'react-redux';
import Input from '../../Components/Input/Input';
import Button from '../../Components/Button/Button';
import Checkbox from '../../Components/Checkbox/Checkbox';
import { EmailRegEx } from '../../App/Consts';
import { CreateUser } from '../../Redux/Actions/UserActions/UserActions';

const RegistrationForm = (props) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { handleSubmit } = props;
  const SubmitForm = (values) => {
    dispatch(CreateUser(values, history));
  };
  return (
    <div className="container pt-3">
      <form onSubmit={handleSubmit(SubmitForm)}>
        <Input type="text" name="email" label="Your email" />
        <Input type="password" name="password" label="Create password" />
        <Checkbox name="license" label="Accept license agreement" />
        <Button text="Register" />
      </form>
    </div>
  );
};

const validate = (values) => {
  const errors = {};
  if (!EmailRegEx.test(values.email)) {
    errors.email = 'Email you entered is invalid!';
  }
  if (values.license !== true) {
    errors.license = "You didn't accept license agreement!";
  }
  return errors;
};

RegistrationForm.propTypes = {
  handleSubmit: PropTypes.func,
};
RegistrationForm.defaultProps = {
  handleSubmit: PropTypes.func,
};

const RegistrationPage = reduxForm({
  form: 'register',
  validate,
})(RegistrationForm);

export default RegistrationPage;
