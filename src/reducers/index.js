import { combineReducers } from 'redux';

function stub(store = {}) {
  return store;
}

const rootReducer = combineReducers({
  stub,
});

export default rootReducer;
