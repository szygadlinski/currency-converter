import React from 'react';
import PropTypes from 'prop-types';
import styles from './CurrencyForm.module.scss';

const Component = ({ children }) => (
  <div className={styles.root}>
    <h2>CurrencyForm</h2>
    {children}
  </div>
);

Component.propTypes = {
  children: PropTypes.node,
};

export {
  Component as CurrencyForm,
};
