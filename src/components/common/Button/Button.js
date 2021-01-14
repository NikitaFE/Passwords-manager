import classNames from 'classnames';

import { useStyles } from './Button.jss';

export const Button = ({ children, color, className, onClick }) => {
  const classes = useStyles();

  return (
    <button
      onClick={onClick}
      className={classNames(classes.button, { [classes[`${color}`]]: color, [className]: className })}
    >
      {children}
    </button>
  );
};
