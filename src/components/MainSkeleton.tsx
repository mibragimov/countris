import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Grid } from '@material-ui/core';
import Skeleton from '@material-ui/lab/Skeleton';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.primary.main,
    marginTop: theme.spacing(4),
    minHeight: '100vh',
  },
  countries: {
    marginTop: theme.spacing(4),
  },
}));

function MainSkeleton() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Container>
        <Grid container spacing={6}>
          {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((idx) => {
            return (
              <Grid item md={3} key={idx}>
                <Skeleton variant="rect" width="100%" height={200} />
              </Grid>
            );
          })}
        </Grid>
        {/* <Skeleton variant="text" />
      <Skeleton variant="rect" width={40} height={40} /> */}
      </Container>
    </div>
  );
}

export { MainSkeleton };
