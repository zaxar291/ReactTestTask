import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';

const RenderedField = ({
  input, name, label, meta: { touched, error },
}) => (
  <div className="form-group form-check">
    {/* eslint-disable-next-line react/jsx-props-no-spreading */}
    <input {...input} className={(touched && error && 'form-check-input is-invalid') || 'form-check-input'} type="checkbox" name={name} id={name} />
    <label className="form-check-label" htmlFor={name}>{label}</label>
    {(touched && error && <div className="invalid-feedback">{error}</div>)}
  </div>
);

const Checkbox = ({ name, label }) => (
  <Field component={RenderedField} name={name} label={label} />
);

RenderedField.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  input: PropTypes.object,
  name: PropTypes.string,
  label: PropTypes.string,
  // eslint-disable-next-line react/forbid-prop-types
  meta: PropTypes.object,
};
RenderedField.defaultProps = {
  input: PropTypes.object,
  name: PropTypes.string,
  label: PropTypes.string,
  meta: PropTypes.object,
};

Checkbox.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
};
Checkbox.defaultProps = {
  name: PropTypes.string,
  label: PropTypes.string,
};

export default Checkbox;
