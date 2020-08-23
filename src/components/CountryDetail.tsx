import React from 'react';
import _ from 'lodash';
import { useParams, useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import {
  Container,
  Grid,
  Paper,
  Box,
  Button,
  Typography,
} from '@material-ui/core';
import { BsArrowLeft } from 'react-icons/bs';
import axios from 'axios';
import { CountryProps } from '../App';
import { CountrySkeleton } from './CountrySkeleton';
import countries from 'i18n-iso-countries';
import locale from 'i18n-iso-countries/langs/en.json';
countries.registerLocale(locale);

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.primary.main,
    paddingTop: theme.spacing(4),
    minHeight: '100vh',
  },
  paper: {
    maxWidth: 120,
    backgroundColor: theme.palette.secondary.main,
  },
  button: {
    width: '100%',
    textTransform: 'capitalize',
  },
  country: {
    marginTop: theme.spacing(4),
  },
  img: {
    width: '100%',
  },
  gridItem: {},
  box: {
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  borderText: {
    marginRight: 'auto',
  },
  border: {
    padding: '.4rem 1rem',
    borderRadius: '3px',
    border: `1px solid ${theme.palette.grey.A100}`,
    marginBottom: theme.spacing(0.5),
    boxShadow: '0 .15rem .25rem rgba(0,0,0,0.25)',

    '&:not(:last-child)': {
      marginRight: theme.spacing(0.5),
    },
  },
}));

function numberWithCommas(x: number) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

interface ParamTypes {
  id: string;
}

function CountryDetail() {
  const [country, setCountry] = React.useState<CountryProps | null>(null);
  const history = useHistory();
  const params = useParams<ParamTypes>();

  React.useEffect(() => {
    async function fetchCountryDetails(code: string): Promise<void> {
      try {
        const { data } = await axios.get<CountryProps>(
          `https://restcountries.eu/rest/v2/alpha/${code}`
        );
        setCountry(data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchCountryDetails(params.id);
  }, [params.id]);
  const classes = useStyles();

  const renderCountry = (): JSX.Element => {
    if (country !== null) {
      const {
        flag,
        name,
        population,
        nativeName,
        region,
        subregion,
        capital,
        topLevelDomain,
        currencies,
        languages,
        borders,
      } = country;

      return (
        <Container maxWidth="xl" className={classes.root}>
          <Container>
            <Grid container>
              <Grid item xs={12}>
                <Paper className={classes.paper}>
                  <Button
                    className={classes.button}
                    startIcon={<BsArrowLeft />}
                    onClick={() => history.goBack()}
                  >
                    Back
                  </Button>
                </Paper>
              </Grid>
            </Grid>

            <Grid container className={classes.country} spacing={4}>
              <Grid item xs={12} md={6}>
                <img src={flag} alt={name} className={classes.img} />
              </Grid>

              <Grid container item xs={12} md={6}>
                <Grid item xs={12}>
                  <Typography variant="h6" component="h3">
                    {name}
                  </Typography>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Typography variant="body1" component="p" gutterBottom>
                    Native Name:{' '}
                    <Typography component="span" variant="body2">
                      {nativeName}
                    </Typography>
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
                  <Typography variant="body1" component="p" gutterBottom>
                    Sub region:{' '}
                    <Typography component="span" variant="body2">
                      {subregion}
                    </Typography>
                  </Typography>
                  <Typography variant="body1" component="p">
                    Capital:{' '}
                    <Typography component="span" variant="body2">
                      {capital}
                    </Typography>
                  </Typography>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Typography variant="body1" component="p" gutterBottom>
                    Top Level Domain:{' '}
                    <Typography component="span" variant="body2">
                      {_.toString(topLevelDomain)}
                    </Typography>
                  </Typography>
                  <Typography variant="body1" component="p" gutterBottom>
                    Currencies:{' '}
                    <Typography component="span" variant="body2">
                      {_.chain(currencies)
                        .map(function (curr: { name: string }) {
                          return curr.name;
                        })
                        .value()
                        .toString()}
                    </Typography>
                  </Typography>
                  <Typography variant="body1" component="p" gutterBottom>
                    Languages:{' '}
                    <Typography component="span" variant="body2">
                      {_.chain(languages)
                        .map(function (curr: { name: string }) {
                          return curr.name;
                        })
                        .value()
                        .toString()}
                    </Typography>
                  </Typography>
                </Grid>
                <Grid item xs={12} className={classes.gridItem}>
                  <Box className={classes.box}>
                    <Typography
                      variant="body1"
                      component="p"
                      className={classes.borderText}
                    >
                      Border Countries
                    </Typography>

                    {_.map(borders, function (curr: string) {
                      return (
                        <Box className={classes.border} key={curr}>
                          <Typography variant="body2" component="p">
                            {countries.getName(curr, 'en')}
                          </Typography>
                        </Box>
                      );
                    })}
                  </Box>
                </Grid>
              </Grid>
            </Grid>
          </Container>
        </Container>
      );
    } else {
      return <CountrySkeleton />;
    }
  };

  return renderCountry();
}

export { CountryDetail };
