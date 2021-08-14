import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import data from './currencies.json';
import { reducer as currenciesReducer } from './currenciesRedux';

const reducers = {
  currencies: currenciesReducer,
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
