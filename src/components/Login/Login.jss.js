import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles(() => ({
  fieldWrapper: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: 6,
  },
  fieldText: {
    display: 'block',
    marginBottom: 4,
  },
}));
