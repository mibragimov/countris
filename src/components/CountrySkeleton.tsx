import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Grid } from '@material-ui/core';
import Skeleton from '@material-ui/lab/Skeleton';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.primary.main,
    paddingTop: theme.spacing(4),
    minHeight: '100vh',
  },

  country: {
    marginTop: theme.spacing(4),
  },

  gridItem: {},
}));

function CountrySkeleton() {
  const classes = useStyles();

  return (
    <Container maxWidth="xl" className={classes.root}>
      <Container>
        <Grid container>
          <Grid item xs={12}>
            <Skeleton variant="text" />
          </Grid>
        </Grid>

        <Grid container className={classes.country} spacing={4}>
          <Grid item md={6}>
            <Skeleton variant="rect" width="100%" height={400} />
          </Grid>

          <Grid container item md={6}>
            <Grid item xs={12}>
              <Skeleton variant="text" />
            </Grid>
            <Grid item md={6}>
              <Skeleton variant="text" />
            </Grid>
            <Grid item md={6}>
              <Skeleton variant="text" />
            </Grid>
            <Grid item xs={12} className={classes.gridItem}>
              <Skeleton variant="text" />
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Container>
  );
}

export { CountrySkeleton };
