import React from 'react';
import PropTypes from 'prop-types';
import styles from './Footer.module.scss';

const Component = ({ children }) => (
  <div className={styles.root}>
    <h2>Footer</h2>
    {children}
  </div>
);

Component.propTypes = {
  children: PropTypes.node,
};

export {
  Component as Footer,
};
