import { useEffect, useState } from 'react';
import firebase from 'firebase';

import Input from '../common/Input';
import Button from '../common/Button';
import PasswordCard from './PasswordCard';

import { useStyles } from './Dashboard.jss';

export const Dashboard = ({ uid }) => {
  const classes = useStyles();
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [passwords, setPasswords] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const db = firebase.firestore();
    const unsubscribe = db.collection('data').doc(uid).collection('passwords').onSnapshot(snapshot => {
      setPasswords(snapshot.docs.map(doc => ({
        id: doc.id,
        data: doc.data(),
      })));
    });

    return () => {
      unsubscribe();
    };
  }, [uid]);

  const addNewPassword = (e, name, password) => {
    e.preventDefault();

    if (!name || !password) {
      setError(`Fields should't be empty!`);
    } else {
      setError(null);
      const db = firebase.firestore();
      db.collection('data').doc(uid).collection('passwords').add({
        name: name,
        password: password,
      });
      setName('');
      setPassword('');
    }
  };

  const updatePassword = (id, name, password) => {
    const db = firebase.firestore();
    db.collection('data').doc(uid).collection('passwords').doc(id).update({
      name,
      password,
    });
  };

  const deletePassword = id => {
    const db = firebase.firestore();
    db.collection('data').doc(uid).collection('passwords').doc(id).delete();
  };
 
  return (
    <div className={classes.dashboard}>
      <title>Dashboard</title>
      <h2 className={classes.title}>Dashboard</h2>
      <form className={classes.dashboardForm} onSubmit={(e) => addNewPassword(e, name, password)}>
        <label className={classes.fieldWrapper}>
          <span className={classes.fieldTitle}>For</span>
          <Input
            type="text"
            placeholder="Gmail"
            onChange={setName}
            value={name}
            error={error}
          />
        </label>
        <label className={classes.fieldWrapper}>
          <span className={classes.fieldTitle}>Password</span>
          <Input
            type="password"
            placeholder="Password"
            onChange={setPassword}
            value={password}
            error={error}  
          />
        </label>
        <Button className={classes.dashboardBtn} color="peterRiver">Add</Button>
      </form>
      {error && <span className={classes.error}>{error}</span>}
      <ul className={classes.passwordsList}>
        {passwords && passwords.map(({ data, id }) => (
          <li key={id}>
            <PasswordCard
              data={data}
              id={id}
              deletePassword={deletePassword}
              updatePassword={updatePassword}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};
