import { REQUEST, RECEIVE } from '../constants/ActionTypes';

const locationListing = (state = { isLocating: false, location: null, regions: null }, action) => {
  if (action.type === REQUEST) {
    return {
      ...state,
      clientLocating: true,
      isLocating: true
    };
  }

  if (action.type === RECEIVE) {
    return {
      ...state,
      clientLocating: false,
      isLocating: false,
      location: action.location,
      regions: action.regions
    };
  }
  return state;
};

export default locationListing;
