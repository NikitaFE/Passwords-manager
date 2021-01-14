import Button from '../Button';

import { useStyles } from './FormPage.jss';

export const FormPage = ({ children, color, title, onSubmit, error }) => {
  const classes = useStyles();

  return (
    <div className={classes.formPage}>
      <title>{title}</title>
      <h2 className={classes.formTitle}>{title}</h2>
      <form className={classes.form} onSubmit={onSubmit}>
        <div className={classes.fields}>
          {children}
        </div>
        {error && (
          <span className={classes.error}>
            {error}
          </span>
        )}
        <Button className={classes.formBtn} color={color}>
          {title}
        </Button>
      </form>
    </div>
  );
};
