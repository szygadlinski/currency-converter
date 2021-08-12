import React from 'react';

import { AppBar, Toolbar, Link, Typography } from '@material-ui/core';
import EuroIcon from '@material-ui/icons/Euro';
import styles from './Header.module.scss';

const Component = () => (
  <div className={styles.root}>
    <AppBar position='static' className={styles.appbar}>
      <Toolbar className={styles.toolbar}>
        <Link href='/' className={styles.title}>
          <EuroIcon className={styles.icon} />
          <Typography variant="h4">
            Currency Converter
          </Typography>
          <EuroIcon className={styles.icon} />
        </Link>
      </Toolbar>
    </AppBar>
  </div>
);

export {
  Component as Header,
};
