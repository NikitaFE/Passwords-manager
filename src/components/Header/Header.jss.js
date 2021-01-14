import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles(({ palette }) => ({
  header: {
    position: 'fixed',
    zIndex: 1000,
    width: '100%',
    padding: '15px 0',
    backgroundColor: palette.wetAsphalt,
    boxShadow: `5px 0 5px 5px ${palette.black30}`,
  },
  headerWrapper: {
    display: 'flex',
    justifyContent: 'space-between',
    maxWidth: 1000,
    margin: '0 auto',
    padding: '0 10px',
  },
  mainTitle: {
    margin: 0,
    fontSize: 30,
    lineHeight: '40px',
  }
}));
