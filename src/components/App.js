import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import get from 'lodash.get';
import { locate } from '../actions';
import logo from '../assets/logo.png';
import Button from './button/button.component';
import ListingCards from './listing_cards/listing_cards.component';
import LocationHeader from './location_header/location_header.component';

import './App.css';

const regionTypes = ['delivery', 'dispensary', 'doctor'];
const regionLabels = {
  delivery: 'Deliveries',
  dispensary: 'Dispensaries',
  doctor: 'Doctors'
};

export class App extends Component {

  constructor() {
    super();
    this.state = {
      clientLocating: false
    };

    this.locateMeClick = this.locateMe.bind(this);
  }

  locateMe() {
    const { dispatch } = this.props;

    if (navigator.geolocation) {
      this.setState({ ...this.state, clientLocating: true });
      navigator.geolocation.getCurrentPosition((position) => {
        dispatch(locate(position.coords));
      });
    }
  }

  render() {
    const { isLocating, location, regions } = this.props;
    const { clientLocating } = this.state;

    const getLabel = (listings, label) => {
      if (get(listings, 'listings').length) {
        return (
          <div key={label} className="app__regions__content-label">
            <strong> {label} </strong>
          </div>
        );
      }
      return <div/>;
    };

    return (
      <div className="app">
        <header className="app__header">
          <img src={logo} className="app__header__logo" alt="weedmaps logo" width="300" height="70" />
          <Button text={'Locate Me'} onClick={this.locateMeClick} />
        </header>
        <main className="app_content">
          { (clientLocating || isLocating) && !location &&
            <p className="app__loading">Locating...</p>
          }
          { !isLocating && location &&
            <LocationHeader location={location}/>
          }
          { !isLocating && regions &&
            <div className="app__regions">
              { regionTypes.map(regionType => (
                <div key={regionType} className="app__regions__content">
                  {getLabel(regions[regionType], regionLabels[regionType])}
                  <ListingCards listings={get(regions[regionType], 'listings')}/>
                </div>
                  ))
              }
            </div>
          }
        </main>
      </div>
    );
  }
}

const mapStateToProps = state => state.location;

App.propTypes = {
  isLocating: PropTypes.bool.isRequired,
  location: PropTypes.object,
  regions: PropTypes.object,
  dispatch: PropTypes.any
};

App.defaultProps = {
  isLocating: false,
  location: {},
  regions: {}
};

export default connect(mapStateToProps)(App);
