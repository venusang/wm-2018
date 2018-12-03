import React from 'react';
import PropTypes from 'prop-types';
import './avatar.css';

const Avatar = ({ img }) => (
  <div className='avatar'>
    <img alt='listing img' src={img}/>
  </div>
 );

Avatar.propTypes = {
  img: PropTypes.string
};

Avatar.defaultProps = {
  img: ''
};

export default Avatar;
