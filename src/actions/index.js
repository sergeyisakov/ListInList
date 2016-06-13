import * as types from '../constants/ActionTypes';

export const addPerson = (person) => ({
  type: types.ADD_PERSON,
  payload: person,
});
