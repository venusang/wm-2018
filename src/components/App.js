import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import get from 'lodash.get';
import styled from 'styled-components';
import { locate } from '../actions';
import logo from '../assets/logo.png';
import Button from './button/button.component';
import ListingCards from './listing_cards/listing_cards.component';
import LocationHeader from './location_header/location_header.component';

import './App.css';

const APP = styled.div`
  margin-bottom: 20px;

  .app__loading {
    margin: 20px 0;
    font-size: 16px;
    color: #333;
  }

  .app__header__logo {
    width: 110px;
    height: 25px;
  }

  .app_content {
    width: 73%;
    margin: 0 auto;
  }
  .app__regions__content-label {
    height: 40px;
    width: 100%;
    text-align: left;
    line-height: 40px;
    margin-top: 20px;
  }

  .app__location-header {
    height: 100px;
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: center;
  }

  .app__location-header h2,
  p {
    margin: 0;
    padding: 0;
  }

  .app__listing-card-wrapper {
    margin: 10px 0 0 0;
  }
`;

const HEADER = styled.header`
  height: 70px;
  display: flex;
  padding: 0 20px;
  justify-content: space-between;
  align-items: center;
  background-color: #222;
  color: #fff;
`;

const H2 = styled.h2`
  -webkit-box-align: center;
  align-items: center;
  color: rgb(74, 74, 74);
  display: flex;
  -webkit-box-flex: 2;
  font-size: 1.625rem;
  font-weight: 600;
  -webkit-box-pack: start;
  justify-content: flex-start;
  white-space: nowrap;
  max-width: 100%;
  margin: 0px;
  padding: 0px 0.3125rem 0px 0px;
  overflow: hidden;
`;

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
            <H2> {label} </H2>
          </div>
        );
      }
      return <div/>;
    };

    return (
      <APP className="app">
        <HEADER className="app__header">
          <img src={logo} className="app__header__logo" alt="weedmaps logo" width="300" height="70" />
          <Button text={'Locate Me'} onClick={this.locateMeClick} />
        </HEADER>
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
      </APP>
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
