import { createUseStyles } from "react-jss";

export const globalStyles = createUseStyles(({ palette }) => ({
  "@global": {
    "*": {
      boxSizing: "border-box",
    },
    html: {
      fontFamily: `-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        sans-serif`,
    },
    body: {
      margin: 0,
      padding: 0,
      color: palette.clouds,
      backgroundColor: palette.midnightBlue,
    },
    a: {
      textDecoration: 'none',
    }
  }
}));

