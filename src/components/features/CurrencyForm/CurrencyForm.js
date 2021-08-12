import React, { useState } from 'react';

import { FormControl, OutlinedInput, InputLabel, Select, MenuItem, Button, Typography } from '@material-ui/core';
import styles from './CurrencyForm.module.scss';

const Component = () => {

  const [conversion, setConversion] = useState({
    amount: 0,
    from: '',
    to: '',
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
      <form onSubmit={convertCurrency}>
        <FormControl variant='outlined'>
          <InputLabel htmlFor='amount'>Amount</InputLabel>
          <OutlinedInput
            id='amount'
            name='amount'
            type='number'
            label='Amount'
            required
            className={styles.input}
            value={conversion.amount}
            onChange={changeConversion}
            inputProps={{
              min: 0,
              max: 999999999,
            }}
          />
        </FormControl>

        <FormControl variant='outlined'>
          <InputLabel htmlFor='from'>From</InputLabel>
          <Select
            id='from'
            name='from'
            label='From'
            required
            className={styles.input}
            value={conversion.from}
            onChange={changeConversion}
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>

        <FormControl variant='outlined'>
          <InputLabel htmlFor='from'>To</InputLabel>
          <Select
            id='to'
            name='to'
            label='To'
            required
            className={styles.input}
            value={conversion.to}
            onChange={changeConversion}
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>

        <Button
          type='submit'
          className={styles.input}
          variant='contained'
        >
          <Typography variant="h6">
            Convert
          </Typography>
        </Button>
      </form>

      <p>
        100000 PLN = <strong>999999 EUR</strong>
      </p>
    </div>
  );
};

export {
  Component as CurrencyForm,
};
