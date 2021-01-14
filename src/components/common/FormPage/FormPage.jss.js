import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles(({ palette }) => ({
  formPage: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  formTitle: {
    margin: '0 0 20px',
    fontSize: 30,
  },
  form: {
    width: 300,
    padding: '20px 30px',
    backgroundColor: palette.wetAsphalt,
    borderRadius: 15,
    boxShadow: `2px 2px 3px 3px ${palette.black30}`,
  },
  fields: {
    marginBottom: 20,
  },
  formBtn: {
    width: 150,
    margin: '0 auto',
  },
  error: {
    display: 'block',
    marginBottom: 5,
    fontSize: 14,
    textAlign: 'center',
    color: palette.alizarin,
  }
}));
