import { useState } from 'react';
import classNames from 'classnames';

import {ReactComponent as Show} from '../../../icons/eye.svg';

import { useStyles } from './Input.jss';

export const Input = ({ color, className, type='text', placeholder='', onChange, error, value, readonly = false }) => {
  const classes = useStyles();
  const [isShowed, setIsShowed] = useState(false);

  const chooseType = (type) => {
    if (type !== 'password') {
      return type;
    } else {
      return isShowed ? 'text' : 'password';
    }
  }

  return (
    <div className={classes.inputWrapper}>
      <input
        className={classNames(classes.input, { [classes[`${color}`]]: color, [className]: className, [classes.error]: error })}
        type={chooseType(type)}
        placeholder={placeholder}
        onChange={({ target }) => onChange(target.value)}
        value={value}
        readOnly={readonly}
      />
      {type === 'password' && <Show className={classes.icon} onClick={() => setIsShowed(!isShowed)} />}
    </div>
  );
};
