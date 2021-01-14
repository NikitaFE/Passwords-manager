import classNames from 'classnames';
import { useState } from 'react';

import {ReactComponent as Delete} from '../../icons/close.svg';
import {ReactComponent as Save} from '../../icons/checked.svg';
import {ReactComponent as Edit} from '../../icons/edit.svg';
import Input from "../common/Input";

import { useStyles } from "./PasswordCard.jss";

const PasswordCard = ({ id, data, deletePassword, updatePassword }) => {
  const classes = useStyles();
  const [isEdited, setIsEdited] = useState(false);
  const [name, setName] = useState(data.name);
  const [password, setPassword] = useState(data.password);
  const [error, setError] = useState(null);

  const handleSave = id => {
    if (!name || !password) {
      setError(`Fields should't be empty!`);
    } else {
      setError(null);
      setIsEdited(false);
      updatePassword(id, name, password);
    }
  }

  return (
    <div className={classes.card}>
      <Input
        className={classes.input}
        type="text"
        value={name}
        readonly={!isEdited}
        onChange={setName}
      />
      <Input
        className={classes.input}
        type="password"
        value={password}
        readonly={!isEdited}
        onChange={setPassword}
      />
      {error && <span className={classes.error}>{error}</span>}
      <div className={classes.icons}>
        {isEdited ? (
          <Save className={classNames(classes.icon, classes.save)} onClick={() => handleSave(id)} />
        ) : (
          <Edit className={classNames(classes.icon, classes.edit)} onClick={() => setIsEdited(true)} />
        )}
        <Delete className={classNames(classes.icon, classes.delete)} onClick={() => deletePassword(id)} />
      </div>
    </div>
  );
};

export default PasswordCard;
