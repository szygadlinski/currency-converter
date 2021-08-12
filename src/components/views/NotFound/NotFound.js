import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

import { Button } from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import styles from './NotFound.module.scss';

const Component = () => {

  const [display, setDisplay] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setDisplay(true);
    }, 1000);
  });

  if(!display) {
    return null;
  } else return (
    <div className={styles.root}>
      <h2 className={styles.title}>Error 404 - there is nothing here... :(</h2>

      <Button
        className={styles.return}
        variant='contained'
        component={NavLink}
        to='/'
        startIcon={<ArrowBackIcon className={styles.icon} />}
      >
        Back to the main page
      </Button>
    </div>
  );
};

export {
  Component as NotFound,
};
