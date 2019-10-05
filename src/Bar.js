import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import { deepOrange } from '@material-ui/core/colors';
import { Context } from './Context';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    marginLeft: 10,
  },
  avatar: {
    margin: 10,
    color: '#fff',
    backgroundColor: deepOrange[500],
  },
}));

export default function OurAppBar() {
  const classes = useStyles();
  const { score } = useContext(Context);

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <img src="favicon.png" width="50" height="50" alt="Logo" />
          <Typography variant="h6" className={classes.title}>
            Kid's Jokes Game
          </Typography>
          <Avatar className={classes.avatar}>{score}</Avatar>
        </Toolbar>
      </AppBar>
    </div>
  );
}
