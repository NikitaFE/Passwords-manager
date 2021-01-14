import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles(({ palette }) => ({
  button: {
    display: 'block',
    padding: '10px 15px',
    font: 'inherit',
    fontWeight: 600,
    fontSize: 15,
    color: palette.clouds,
    backgroundColor: 'transparent',
    borderRadius: 8,
    border: '1px solid transparent',
    outline: 'none',
    cursor: 'pointer',
    transition: 'all 0.3s ease-in-out',
    '&:focus': {
      boxShadow: `2px 2px 5px 5px ${palette.black30}`,
    },
  },
  turquoise: {
    backgroundColor: palette.turquoise,
    '&:hover': {
      color: palette.turquoise,
      backgroundColor: 'transparent',
      borderColor: palette.turquoise,
    },
  },
  pumpkin: {
    backgroundColor: palette.pumpkin,
    '&:hover': {
      color: palette.pumpkin,
      backgroundColor: 'transparent',
      borderColor: palette.pumpkin,
    },
  },
  peterRiver: {
    backgroundColor: palette.peterRiver,
    '&:hover': {
      color: palette.peterRiver,
      backgroundColor: 'transparent',
      borderColor: palette.peterRiver,
    },
  },
}));
