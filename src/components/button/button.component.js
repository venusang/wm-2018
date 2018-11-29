import React from 'react';
import PropTypes from 'prop-types';

import './button.css';

const Button = props => (
  <button className='button' onClick={props.onClick}>
    {props.text}
  </button>
);

Button.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func
};

Button.defaultProps = {
  text: ''
};

export default Button;
