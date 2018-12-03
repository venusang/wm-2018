import React from 'react';
import { shallow } from 'enzyme';
import Button from './button/button.component';
import ListingCards from './listing_cards/listing_cards.component';
import LocationHeader from './location_header/location_header.component';


describe('<App/>', () => {
  describe('<Button />', () => {
    it('renders the button', () => {
      const props = {
        text: 'Locate Me'
      };
      const wrapper = shallow(<Button {...props}/>);

      expect(wrapper.exists('.button')).toBe(true);
      expect(wrapper.find('.button').text()).toBe('Locate Me');
    });
  });

  describe('<LocationHeader />', () => {
    it('renders the city and quote', () => {
      const props = {
        isLocating: false,
        location: { name: 'Granada Hills, CA', quote: 'this is a quote' }
      };

      const wrapper = shallow(<LocationHeader {...props} />);

      expect(wrapper.find('h2').hasClass('app__location-header__name')).toBe(true);
      expect(wrapper.find('h2').text()).toBe('Granada Hills, CA');
      expect(wrapper.find('p').text()).toBe('this is a quote');
    });
  });

  describe('<ListingCards />', () => {
    it('renders the listing cards', () => {
      const props = {
        listings: [
          {
            avatar_image: {
              small_url: 'image/image.png',
            },
            id: 'asdd',
            name: 'This is a name',
            rating: 2.32423,
            distance: 10.34343
          },
          {
            avatar_image: {
              small_url: 'image/image.png',
            },
            id: 'asdasds',
            name: 'This is a name',
            rating: 2.32423,
            distance: 10.34343
          }
        ]
      };

      const wrapper = shallow(<ListingCards {...props} />);
      expect(wrapper.exists('.app__listing-card-wrapper')).toBe(true);
    });
  });
});
