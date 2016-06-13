import {ADD_PERSON} from '../constants/ActionTypes';
import {v4} from 'node-uuid';

export default (state = [], action) => {
  switch (action.type) {
    case ADD_PERSON:
      return [
        ...state,
        {
          id: v4(),
          ...action.payload,
        }
      ];
    default:
      return state;
  }
}
