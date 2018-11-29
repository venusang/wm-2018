import React from 'react';
import PropTypes from 'prop-types';
import ListingCard from '../listing_card/listing_card.component';

const ListingCards = ({ listings }) => (
  <div>
    {listings.map(listing => (
      <div key={listing.id} className='app__listing-card-wrapper'>
        <ListingCard listing={listing} />
      </div>
    ))}
  </div>);

ListingCards.propTypes = {
  listings: PropTypes.array
};

ListingCards.defaultProps = {
  listings: []
};

export default ListingCards;
