import { useState } from 'react';
import firebase from 'firebase';

import FormPage from '../common/FormPage';
import Input from '../common/Input';

import { useStyles } from './Login.jss';

export const Login = () => {
  const classes = useStyles();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState(null);

  const login = (e, email, password) => {
    e.preventDefault();
    firebase.auth().signInWithEmailAndPassword(email, password)
      .catch((error) => {
        const errorMessage = error.message;
        setErrorMessage(errorMessage);
      });
  };

  return (
    <FormPage
      color="pumpkin"
      title="Login"
      onSubmit={e => login(e, email, password)}
      error={errorMessage}
    >
      <label className={classes.fieldWrapper}>
        <span className={classes.fieldText}>Email</span>
        <Input
          color="pumpkin"
          type="text"
          placeholder="email"
          onChange={setEmail}
          error={errorMessage}
          value={email}
        />
      </label>
      <label className={classes.fieldWrapper}>
        <span className={classes.fieldText}>Password</span>
        <Input
          color="pumpkin"
          type="password"
          placeholder="password"
          onChange={setPassword}
          error={errorMessage}
          value={password}
        />
      </label>
    </FormPage>
  );
};
