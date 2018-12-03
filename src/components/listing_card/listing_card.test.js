import React from 'react';
import { shallow } from 'enzyme';
import ListingCard from './listing_card.component';
import Avatar from '../avatar/avatar.component';

describe('<ListingCard/>', () => {
  it('renders the <AVATAR/>', () => {
    const props = {
      avatar: 'http://someimagelink.png'
    };

    const wrapper = shallow(<Avatar {...props} />);
    expect(wrapper.exists('.avatar')).toBe(true);
  });

  const props = {
    name: 'Awesome Name',
    rating: 4.56,
    distance: 10.2
  };
  it('renders the listing Name', () => {
    const wrapper = shallow(<ListingCard {...props} />);
    expect(wrapper.find('div.name').text()).toBe('Awesome Name');
  });

  it('renders the listing Rating', () => {
    const wrapper = shallow(<ListingCard {...props} />);
    expect(wrapper.exists('.rating')).toBe(true);
  });

  it('renders the listing Distance', () => {
    const wrapper = shallow(<ListingCard {...props} />);
    expect(wrapper.exists('.distance')).toBe(true);
  });
});
