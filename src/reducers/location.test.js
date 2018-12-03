import reducer from './location';
import * as types from '../constants/ActionTypes';

describe('location reducer', () => {
  it('returns the initial state', () => {
    expect(reducer(undefined, {})).toEqual(
      {
        isLocating: false,
        location: null,
        regions: null
      }
    );
  });
  it('handles REQUEST', () => {
    expect(
      reducer({}, {
        type: types.REQUEST
      })
    ).toEqual(
      {
        clientLocating: true,
        isLocating: true
      }
    );
  });
  it('handles RECEIVE', () => {
    expect(
      reducer({}, {
        type: types.RECEIVE
      })
    ).toEqual(
      {
        clientLocating: false,
        isLocating: false
      }
    );
  });
});
