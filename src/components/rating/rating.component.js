import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const SPRITE = styled.div`
  unicode-bidi: bidi-override;
  color: #404040;
  font-size: 12px;
  position: relative;
  padding: 0;
  text-shadow: 0px 1px 0 var(--light-gray);
  display: inline-block;

  .top {
    color: rgb(0, 205, 190);
    padding: 0;
    position: absolute;
    z-index: 1;
    display: block;
    top: 0;
    left: 0;
    overflow: hidden;
  }

  .bottom {
    padding: 0;
    display: block;
    z-index: 0;
    color: #a2a2a2;
  }
`;
const RatingIcon = () => (<span>★</span>);

export class Rating extends Component {
  render() {
    const { rating } = this.props;
    const style = {
      width: `${(rating / 5 || 0) * 100}%`
    };
    return (
      <SPRITE className="sprite">
        <div className="top" style={style}>
          <RatingIcon />
          <RatingIcon />
          <RatingIcon />
          <RatingIcon />
          <RatingIcon />
        </div>
        <div className="bottom">
          <RatingIcon />
          <RatingIcon />
          <RatingIcon />
          <RatingIcon />
          <RatingIcon />
        </div>
      </SPRITE>
    );
  }
}

Rating.propTypes = {
  rating: PropTypes.number
};

Rating.defaultProps = {
  rating: ''
};

export default Rating;
