import React, { useState } from 'react';
import clsx from 'clsx';

import { FormControl, OutlinedInput, InputLabel, Select, MenuItem, Button, Typography } from '@material-ui/core';
import styles from './CurrencyForm.module.scss';

import data from '../../../currencies.json';

const Component = () => {

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

  const convertCurrency = () => {

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
            {data.currencies.map(currency => (
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
            {data.currencies.map(currency => (
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
          {`${conversion.amount * conversion.exchangeRate} ${conversion.to}`}
        </strong>
      </p>
    </div>
  );
};

export {
  Component as CurrencyForm,
};
