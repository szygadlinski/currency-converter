import Axios from 'axios';

export const getCurrencies = ({ currencies }) => currencies;

const reducerName = 'currencies';
const createActionName = name => `app/${reducerName}/${name}`;

const FETCH_START = createActionName('FETCH_START');
const FETCH_SUCCESS = createActionName('FETCH_SUCCESS');
const FETCH_ERROR = createActionName('FETCH_ERROR');

export const fetchStarted = payload => ({ payload, type: FETCH_START });
export const fetchSuccess = payload => ({ payload, type: FETCH_SUCCESS });
export const fetchError = payload => ({ payload, type: FETCH_ERROR });

export const reducer = (statePart = [], action = {}) => {
  switch (action.type) {
    default:
      return statePart;
  }
};
