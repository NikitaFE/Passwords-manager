import firebase from 'firebase';
import { useState } from 'react';

import FormPage from '../common/FormPage';
import Input from '../common/Input';
import { useStyles } from './Registration.jss';

export const Registration = () => {
  const classes = useStyles();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmedPassword, setConfirmedPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState(null);


  const onSubmit = (e, email, password) => {
    e.preventDefault();
    if (password !== confirmedPassword) {
      setErrorMessage(`Passwords should match!`);
    } else {
      setErrorMessage(null);
      firebase.auth().createUserWithEmailAndPassword(email, password)
        .catch((error) => {
          const errorMessage = error.message;
          setErrorMessage(errorMessage);
        });
    }
  };

  return (
    <FormPage
      color="turquoise"
      title="Registration"
      onSubmit={e => onSubmit(e, email, password)}
      error={errorMessage}
    >
      <label className={classes.fieldWrapper}>
        <span className={classes.fieldText}>Email</span>
        <Input
          color="turquoise"
          type="text"
          placeholder="email"
          onChange={setEmail}
          error={errorMessage}
        />
      </label>
      <label className={classes.fieldWrapper}>
        <span className={classes.fieldText}>Password</span>
        <Input
          color="turquoise"
          type="password"
          placeholder="password"
          onChange={setPassword}
          error={errorMessage}
        />
      </label>
      <label className={classes.fieldWrapper}>
        <span className={classes.fieldText}>Confirm password</span>
        <Input
          color="turquoise"
          type="password"
          placeholder="confirm password"
          onChange={setConfirmedPassword}
          error={errorMessage}
        />
      </label>
    </FormPage>
  );
};
