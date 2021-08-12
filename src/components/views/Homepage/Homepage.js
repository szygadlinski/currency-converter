import React from 'react';

import styles from './Homepage.module.scss';

import { CurrencyForm } from '../../features/CurrencyForm/CurrencyForm';

const Component = () => (
  <div className={styles.root}>
    <CurrencyForm />
  </div>
);

export {
  Component as Homepage,
};
