import React from 'react';
import PropTypes from 'prop-types';

const LocationHeader = ({ location }) => (
  <div className="app__location-header">
    <h2 className="app__location-header__name">{location.name}</h2>
    <p>{location.quote}</p>
  </div>
 );

LocationHeader.propTypes = {
  location: PropTypes.object
};

LocationHeader.defaultProps = {
  location: {}
};

export default LocationHeader;
