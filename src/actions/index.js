import * as types from '../constants/ActionTypes';
import * as config from '../constants/config';

/* TODO Given the state shape defined in the reducer,
 * implement this action
 */
export const requestLocation = coords => ({
  type: types.REQUEST
});

/* TODO Given the state shape defined in the reducer,
 * implement this action
 */
export const receiveLocation = (coords, json) => ({
  type: types.RECEIVE
});

/* TODO Given the state shape defined in the reducer,
 * implement this action. Hint, this Action will likely be async
 */
export const locate = coords => (dispatch) => {

};
