import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles(({ palette }) => ({
  title: {
    margin: 0,
    marginBottom: 30,
    fontSize: 40,
    textAlign: 'center',
  },
  dashboardForm: {
    display: 'flex',
    justifyContent: 'center', 
    marginBottom: 20,
  },
  fieldWrapper: {
    marginRight: 15,
  },
  fieldTitle: {
    marginRight: 10,
  },
  dashboardBtn: {
    width: 100,
  },
  passwordsList: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr',
    gap: 20,
    margin: 0,
    padding: 0,
    listStyle: 'none',
  },
  error: {
    display: 'block',
    marginBottom: 5,
    fontSize: 14,
    textAlign: 'center',
    color: palette.alizarin,
  },
}));
