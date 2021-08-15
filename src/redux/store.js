import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import data from './initialState.json';
import { reducer as itemsReducer } from './currenciesRedux';

const reducers = {
  items: itemsReducer,
};

Object.keys(data).forEach(item => {
  if (typeof reducers[item] == 'undefined') {
    reducers[item] = (statePart = null) => statePart;
  }
});

const combinedReducers = combineReducers(reducers);

export const store = createStore(
  combinedReducers,
  data,
  composeWithDevTools(
    applyMiddleware(thunk)
  )
);
