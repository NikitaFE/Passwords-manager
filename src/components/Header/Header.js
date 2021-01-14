import { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import firebase from 'firebase';

import Button from '../common/Button';

import { useStyles } from './Header.jss';

export const Header = () => {
  const classes = useStyles();
  const history = useHistory();
  const [pathname, setPathname] = useState(history.location.pathname);

  const logout = () => {
    firebase.auth().signOut();
  }
  
  useEffect(() => {
    return history.listen((location) => { 
      setPathname(location.pathname); 
    });
  }, [history]); 
  
  return (
    <div className={classes.header}>
      <div className={classes.headerWrapper}>
        <h1 className={classes.mainTitle}>Passwords manager</h1>
        {pathname === '/registration' && (
          <Link to='/login'>
            <Button color='pumpkin'>Login</Button>
          </Link>
        )}
        {pathname === '/dashboard' && (
          <Link to='/login'>
            <Button onClick={logout} color='peterRiver'>Logout</Button>
          </Link>
        )}
        {pathname !== '/dashboard' && pathname !== '/registration' && (
          <Link to='/registration'>
            <Button color='turquoise'>Registration</Button>
          </Link>
        )}
      </div>
    </div>
  );
};
