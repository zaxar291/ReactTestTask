import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';

const RenderField = ({
  input, label, type, fieldName, meta: { touched, error },
}) => (
  <div className="form-group">
    {label !== '' && <label htmlFor={fieldName}>{label}</label>}
    <div>
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <input {...input} placeholder={label} type={type} name={fieldName} className={(touched && error && 'form-control is-invalid') || 'form-control'} />
      {touched
          && ((error && <div className="invalid-feedback">{error}</div>))}
    </div>
  </div>
);

const Input = ({
  label, type, name,
}) => (
  <Field component={RenderField} label={label} type={type} name={name} fieldName={name} className="form-control" />
);

RenderField.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  input: PropTypes.any,
  label: PropTypes.string,
  type: PropTypes.string,
  fieldName: PropTypes.string,
  // eslint-disable-next-line react/forbid-prop-types
  meta: PropTypes.object,
};

RenderField.defaultProps = {
  input: PropTypes.any,
  label: '',
  type: PropTypes.string,
  fieldName: '',
  meta: PropTypes.object,
};

Input.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string,
};

Input.defaultProps = {
  label: '',
  type: PropTypes.string,
  name: PropTypes.string,
};

export default Input;
