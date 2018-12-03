import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const BUTTON = styled.button`
  padding: .5em 1em;
  background: transparent;
  border: 1px solid #00CDBE;
  border-radius: 3px;
  color: #EEE;
  font-size: 0.85rem;
  text-transform: uppercase;

  :hover {
    cursor: pointer;
    border-color: #00CDBE;
    color: #FFF;
  }

  :focus {
    outline: none;
  }
`;

const Button = props => (
  <BUTTON className='button' onClick={props.onClick}>
    {props.text}
  </BUTTON>
);

Button.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func
};

Button.defaultProps = {
  text: ''
};

export default Button;
