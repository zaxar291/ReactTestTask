import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ text }) => (
  <div className="form-group">
    <button type="submit" className="btn btn-primary">{text}</button>
  </div>
);

Button.propTypes = {
  text: PropTypes.string,
};
Button.defaultProps = {
  text: PropTypes.string,
};
export default Button;
