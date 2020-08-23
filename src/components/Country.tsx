import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { CountryProps } from '../App';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.secondary.main,
    transition: 'transform .2s cubic-bezier(1,0,0,1)',

    '&:hover': {
      transform: 'translateY(-3px)',
    },
  },
  media: {
    height: 140,
  },
  link: {
    textDecoration: 'none',

    '&:link': {
      color: 'inherit',
    },
    '&:active': {
      color: 'inherit',
    },
    '&:visited': {
      color: 'inherit',
    },
  },
}));

function numberWithCommas(x: number) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

interface Props {
  country: CountryProps;
}

function Country({
  country: { name, flag, region, capital, population, alpha3Code },
}: Props) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <Link to={alpha3Code} className={classes.link}>
          <CardMedia
            className={classes.media}
            image={flag}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h6" component="h2">
              {name}
            </Typography>

            <Typography variant="body1" component="p" gutterBottom>
              Population:{' '}
              <Typography component="span" variant="body2">
                {numberWithCommas(population)}
              </Typography>
            </Typography>
            <Typography variant="body1" component="p" gutterBottom>
              Region:{' '}
              <Typography component="span" variant="body2">
                {region}
              </Typography>
            </Typography>
            <Typography variant="body1" component="p">
              Capital:{' '}
              <Typography component="span" variant="body2">
                {capital}
              </Typography>
            </Typography>
          </CardContent>
        </Link>
      </CardActionArea>
    </Card>
  );
}

export { Country };
