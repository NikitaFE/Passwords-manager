import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Redirect, Switch } from 'react-router-dom';
import firebase from 'firebase';

import Header from '../Header';
import Login from '../Login';
import Registration from '../Registration';
import Dashboard from '../Dashboard';
import CustomRoute from '../CustomRoute';

import { globalStyles } from '../../styles.jss';
import { useStyles } from './App.jss.js';

function App() {
  globalStyles();
  const classes = useStyles();
  const [user, setUser] = useState(null);

  const authListener = () => {
    firebase.auth().onAuthStateChanged(user =>
      user ? setUser(user) : setUser(null)
    );
  } 

  useEffect(() => {
    authListener();
  }, []);

  return (
    <Router>
      <div className={classes.app}>
        <Header />
        <main className={classes.main}>
          <Switch>
            <CustomRoute
              path='/dashboard'
              type='private'
              user={user}
            >
              <Dashboard uid={user?.uid} />
            </CustomRoute>
            <CustomRoute
              path='/login'
              type='guest'
              user={user}
              component={Login}
            />
            <CustomRoute
              path='/registration'
              type='guest'
              user={user}
              component={Registration}
            />
            {user ? <Redirect from="*" to='/dashboard' /> : <Redirect from="*" to="/login" />}
          </Switch>
        </main>
      </div>
    </Router>
  );
}

export default App;
