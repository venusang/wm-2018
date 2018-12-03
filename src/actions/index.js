import * as types from '../constants/ActionTypes';
import * as config from '../constants/config';

export const requestLocation = () => ({
  type: types.REQUEST,
  isLocating: true
});

export const receiveLocation = json => ({
  type: types.RECEIVE,
  isLocating: false,
  location: json.data.location,
  regions: json.data.regions
});

export const locate = coords => (dispatch) => {
  dispatch(requestLocation(coords));
  return fetch(`https://${config.API_HOST}/wm/v2/location?include%5B%5D=regions.listings&latlng=${coords.latitude}%2C${coords.longitude}`)
    .then(
      response => response.json(),
      error => error
    )
    .then(json =>
      dispatch(receiveLocation(json))
    );
};
