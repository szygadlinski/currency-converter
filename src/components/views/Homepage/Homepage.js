import React from 'react';
import PropTypes from 'prop-types';

import styles from './Homepage.module.scss';

import { CurrencyForm } from '../../features/CurrencyForm/CurrencyForm';

const Component = ({ children }) => (
  <div className={styles.root}>
    <CurrencyForm />
  </div>
);

Component.propTypes = {
  children: PropTypes.node,
};

export {
  Component as Homepage,
};
