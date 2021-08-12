import React from 'react';
import PropTypes from 'prop-types';
import styles from './NotFound.module.scss';

const Component = ({ children }) => (
  <div className={styles.root}>
    <h2>NotFound</h2>
    {children}
  </div>
);

Component.propTypes = {
  children: PropTypes.node,
};

export {
  Component as NotFound,
};
