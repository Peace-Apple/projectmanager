import { NEW_PROJECT } from '../actions/types';

const initialState = {
  items: [],
  item: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case NEW_PROJECT:
      return {
        ...state,
        item: action.payload
      };
    default:
      return state;
  }
}
