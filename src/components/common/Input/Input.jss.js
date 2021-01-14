import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles(({ palette }) => ({
  inputWrapper: {
    position: 'relative',
    display: 'inline-block',
  },
  input: {
    display: 'block',
    width: '100%',
    padding: '10px 15px',
    font: 'inherit',
    fontSize: 16,
    borderRadius: 10,
    border: `1px solid ${palette.black}`,
    boxShadow: `inset 0 0 5px 0 ${palette.black}`,
    outline: 'none',
  },
  pumpkin: {
    '&:hover': {
      borderColor: palette.pumpkin,
      boxShadow: `inset 0 0 5px 0 ${palette.pumpkin}`,
    },
    '&:focus': {
      borderColor: palette.pumpkin,
      boxShadow: `inset 0 0 5px 0 ${palette.pumpkin}`,
    },
  },
  turquoise: {
    '&:hover': {
      borderColor: palette.turquoise,
      boxShadow: `inset 0 0 5px 0 ${palette.turquoise}`,
    },
    '&:focus': {
      borderColor: palette.turquoise,
      boxShadow: `inset 0 0 5px 0 ${palette.turquoise}`,
    },
  },
  error: {
    borderColor: palette.alizarin,
    boxShadow: `inset 0 0 5px 0 ${palette.alizarin}`,
    '&:hover': {
      borderColor: palette.alizarin,
      boxShadow: `inset 0 0 5px 0 ${palette.alizarin}`,
    },
    '&:focus': {
      borderColor: palette.alizarin,
      boxShadow: `inset 0 0 5px 0 ${palette.alizarin}`,
    },
  },
  icon: {
    position: 'absolute',
    top: 10,
    right: 10,
    width: 25,
    height: 25,
    fill: palette.peterRiver,
    "&:hover": {
      opacity: 0.8,
      cursor: 'pointer',
    },
  },
}));
