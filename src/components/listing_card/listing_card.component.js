import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Avatar from '../avatar/avatar.component';
import Rating from '../rating/rating.component';

const LISTINGCARD = styled.div`
  width: 95%;
  background-color: rgb(255, 255, 255);
  box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 3px;
  border-radius: 3px;
  overflow: hidden;
  min-height: 200px;

  .info {
    width: 100%;
    display: inline-block;
    vertical-align: top;
    text-align: left;
  }

  .name {
    min-height: 2.4rem;
    max-height: 2.4rem;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    color: rgb(74, 74, 74);
    display: block;
    font-size: 1rem;
    font-weight: 600;
    line-height: 1.2;
    margin-bottom: 0.3125rem;
    text-overflow: ellipsis;
    white-space: normal;
    padding: 0px 0.5rem;
    overflow: hidden;
  }

  .rating {
    color: rgb(102, 102, 102);
    font-weight: 600;
    margin-left: 0.1875rem;
    font-size: 0.6875rem;
    line-height: 0.6875rem;
    display: inline-block;
  }

  .distance {
    color: rgb(102, 102, 102);
    float: right;
    font-size: 0.6875rem;
    font-weight: 600;
    letter-spacing: 0.03125rem;
    line-height: 1.4375rem;
    white-space: nowrap;
  }

  .bottomInfo {
    -webkit-box-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    align-items: center;
    bottom: 0.0625rem;
    padding: 0px 0.5rem 0.25rem;
  }
`;

const roundRatings = rating => Math.round(rating);
const roundDistance = distance => Number.parseFloat(distance).toPrecision(2);

const ListingCard = props => (
  <LISTINGCARD className="listingCard">
    <Avatar img={props.avatar} />
    <div className="info">
      <div className="name">{ props.name }</div>
      <div className="bottomInfo">
        <Rating rating={props.rating} />
        <div className="rating">{roundRatings(props.rating)}</div>
        <div className="distance">{roundDistance(props.distance)} mi</div>
      </div>
    </div>
  </LISTINGCARD>
);

ListingCard.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  rating: PropTypes.number,
  distance: PropTypes.number
};

ListingCard.defaultProps = {
  name: 'default name'
};

export default ListingCard;
