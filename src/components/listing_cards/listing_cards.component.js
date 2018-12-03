import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ListingCard from '../listing_card/listing_card.component';

const LISTINGCARDS = styled.div`
  display: inline-block;
  flex-direction: column;
  flex-wrap: nowrap;
  max-width: 15rem;
  min-width: 8.75rem;
  margin-bottom: 0.1875rem;
  width: calc(20% - 35px);
  list-style: none;
`;

const ListingCards = ({ listings }) => (
  <div>
    {listings.map(listing => (
      <LISTINGCARDS key={listing.id} className='app__listing-card-wrapper'>
        <ListingCard
          avatar={listing.avatar_image.small_url}
          name={listing.name}
          rating={listing.rating}
          distance={listing.distance}
        />
      </LISTINGCARDS>
    ))}
  </div>
);

ListingCards.propTypes = {
  listings: PropTypes.array
};

ListingCards.defaultProps = {
  listings: []
};

export default ListingCards;
