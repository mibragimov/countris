import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Container from '@material-ui/core/Container';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { FaMoon, FaRegMoon } from 'react-icons/fa';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  appBar: {
    paddingLeft: 0,
    paddingRight: 0,
  },
  button: {
    textTransform: 'capitalize',
  },
}));

interface Props {
  onThemeChange: () => void;
  theme: boolean;
}

function Header({ onThemeChange, theme }: Props) {
  const classes = useStyles();

  return (
    <div>
      <AppBar position="static" color="secondary">
        <Container>
          <Toolbar className={classes.appBar}>
            <Typography variant="h5" className={classes.title}>
              Where in the world?
            </Typography>
            <Button
              className={classes.button}
              startIcon={theme ? <FaMoon /> : <FaRegMoon />}
              onClick={onThemeChange}
            >
              {theme ? 'Dark Mode' : 'Light Mode'}
            </Button>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
}

export { Header };
