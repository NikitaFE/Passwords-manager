import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles(({ palette }) => ({
  card: {
    display: 'flex',
    flexDirection: 'column',
    padding: '20px 30px',
    borderRadius: 10,
    boxShadow: `2px 2px 3px 3px ${palette.black30}`,
  },
  input: {
    marginBottom: 10,
    "&:read-only": {
      color: palette.clouds,
      backgroundColor: palette.black30,
      cursor: 'not-allowed',
    },
  },
  icons: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  icon: {
    width: 30,
    height: 30,
    "&:hover": {
      opacity: 0.8,
      cursor: 'pointer',
    },
  },
  edit: {
    fill: palette.peterRiver,
  },
  delete: {
    fill: palette.alizarin,
  },
  save: {
    fill: palette.emerald,
  },
  error: {
    display: 'block',
    marginBottom: 5,
    fontSize: 14,
    textAlign: 'center',
    color: palette.alizarin,
  }
}));
