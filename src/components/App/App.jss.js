import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles(({ palette }) => ({
  app: {
    position: 'relative',
    minHeight: '100vh',
    height: 1,
    backgroundColor: palette.midnightBlue,
  },
  main: {
    maxWidth: 1000,
    height: '100%',
    margin: '0 auto',
    padding: '130px 20px 50px',
  }
}));
