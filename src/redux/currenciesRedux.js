import Axios from 'axios';

export const getCurrencies = ({ items }) => items.data.currencies;
export const getExchange = ({ items }) => items.exchange.to[0].mid;

const reducerName = 'currencies';
const createActionName = name => `app/${reducerName}/${name}`;

const FETCH_START = createActionName('FETCH_START');
const FETCH_SUCCESS = createActionName('FETCH_SUCCESS');
const FETCH_EXCHANGE_SUCCESS = createActionName('FETCH_EXCHANGE_SUCCESS');
const FETCH_ERROR = createActionName('FETCH_ERROR');

export const fetchStarted = payload => ({ payload, type: FETCH_START });
export const fetchSuccess = payload => ({ payload, type: FETCH_SUCCESS });
export const fetchExchangeSuccess = payload => ({ payload, type: FETCH_EXCHANGE_SUCCESS });
export const fetchError = payload => ({ payload, type: FETCH_ERROR });

export const fetchCurrenciesFromAPI = () => {
  return dispatch => {
    dispatch(fetchStarted());

    Axios({
      method: 'get',
      url: 'https://xecdapi.xe.com/v1/currencies.json/?obsolete=true',
      auth: {
        username: 'szymonzygadliski695804869',
        password: 'hrciaknahhtukhbhb5c00ek5fh',
      },
    })
      .then(res => {
        dispatch(fetchSuccess(res.data));
      })
      .catch(err => {
        dispatch(fetchError(err.message || true));
      });
  };
};

export const fetchExchangeFromAPI = (from, to, amount) => {
  return dispatch => {
    dispatch(fetchStarted());

    Axios({
      method: 'get',
      url: `https://xecdapi.xe.com/v1/convert_from.json/?from=${from}&to=${to}&amount=${amount}`,
      auth: {
        username: 'szymonzygadliski695804869',
        password: 'hrciaknahhtukhbhb5c00ek5fh',
      },
    })
      .then(res => {
        dispatch(fetchExchangeSuccess(res.data));
      })
      .catch(err => {
        dispatch(fetchError(err.message || true));
      });
  };
};

export const reducer = (statePart = [], action = {}) => {
  switch (action.type) {
    case FETCH_START: {
      return {
        ...statePart,
        loading: {
          active: true,
          error: false,
        },
      };
    }
    case FETCH_SUCCESS: {
      return {
        ...statePart,
        data: action.payload,
        loading: {
          active: false,
          error: false,
        },
      };
    }
    case FETCH_EXCHANGE_SUCCESS: {
      return {
        ...statePart,
        exchange: action.payload,
        loading: {
          active: false,
          error: false,
        },
      };
    }
    case FETCH_ERROR: {
      return {
        ...statePart,
        loading: {
          active: false,
          error: action.payload,
        },
      };
    }
    default:
      return statePart;
  }
};
