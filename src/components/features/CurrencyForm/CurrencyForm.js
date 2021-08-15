import React, { useState } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import { connect } from 'react-redux';
import { getCurrencies, fetchCurrenciesFromAPI, fetchExchangeFromAPI } from '../../../redux/currenciesRedux';

import { FormControl, OutlinedInput, InputLabel, Select, MenuItem, Button, Typography } from '@material-ui/core';
import styles from './CurrencyForm.module.scss';

const Component = ({ currencies, fetchCurrencies, fetchExchange }) => {

  fetchCurrencies();

  const [conversion, setConversion] = useState({
    amount: '',
    from: '',
    to: '',
    exchangeRate: '',
  });

  const changeConversion = event => {
    setConversion({
      ...conversion,
      [event.target.name]: event.target.value,
    });
  };

  let result = {};

  const convertCurrency = event => {
    event.preventDefault();
    result = fetchExchange(conversion.from, conversion.to, conversion.amount);
  };

  return (
    <div className={styles.root}>
      <form className={styles.form} onSubmit={convertCurrency}>
        <FormControl variant='outlined' className={styles.input}>
          <InputLabel htmlFor='amount'>Amount</InputLabel>
          <OutlinedInput
            id='amount'
            name='amount'
            type='number'
            label='Amount'
            required
            value={conversion.amount}
            onChange={changeConversion}
            inputProps={{
              min: 0,
              max: 999999999,
              step: 0.01,
            }}
          />
        </FormControl>

        <FormControl variant='outlined' className={styles.input}>
          <InputLabel htmlFor='from'>From</InputLabel>
          <Select
            id='from'
            name='from'
            label='From'
            required
            value={conversion.from}
            onChange={changeConversion}
          >
            {currencies.map(currency => (
              <MenuItem
                key={currency.iso}
                value={currency.iso}
              >
                {`${currency.iso} - ${currency.currency_name}`}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <FormControl variant='outlined' className={styles.input}>
          <InputLabel htmlFor='from'>To</InputLabel>
          <Select
            id='to'
            name='to'
            label='To'
            required
            value={conversion.to}
            onChange={changeConversion}
          >
            {currencies.map(currency => (
              <MenuItem
                key={currency.iso}
                value={currency.iso}
              >
                {`${currency.iso} - ${currency.currency_name}`}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <Button
          type='submit'
          className={clsx(styles.input, styles.button)}
          variant='contained'
          disabled={conversion.amount > 0 ? false : true}
        >
          <Typography variant="h6">
            Convert
          </Typography>
        </Button>
      </form>

      <p>
        {`${conversion.amount} ${conversion.from} =`}
        <br />
        <strong>
          {`${result.to[0].mid} ${conversion.to}`}
        </strong>
      </p>
    </div>
  );
};

Component.propTypes = {
  currencies: PropTypes.array,
  fetchCurrencies: PropTypes.func,
  fetchExchange: PropTypes.func,
};

const mapStateToProps = state => ({
  currencies: getCurrencies(state),
});

const mapDispatchToProps = dispatch => ({
  fetchCurrencies: () => dispatch(fetchCurrenciesFromAPI()),
  fetchExchange: (from, to, amount) => dispatch(fetchExchangeFromAPI(from, to, amount)),
});

const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  Container as CurrencyForm,
  Component as CurrencyFormComponent,
};
