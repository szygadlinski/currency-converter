import React from 'react';
import PropTypes from 'prop-types';
import styles from './Header.module.scss';

const Component = ({ children }) => (
  <div className={styles.root}>
    <h2>Header</h2>
    {children}
  </div>
);

Component.propTypes = {
  children: PropTypes.node,
};

export {
  Component as Header,
};
