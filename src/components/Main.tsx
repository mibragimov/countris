import React, { Dispatch, SetStateAction } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { Search } from './Search';
import { Dropdown } from './Dropdown';
import { Country } from './Country';
import { MainSkeleton } from './MainSkeleton';
import { CountryProps } from '../App';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.primary.main,
    marginTop: theme.spacing(4),
    minHeight: '100vh',
  },
  countries: {
    marginTop: theme.spacing(4),
  },
  searchBox: {
    '@media only screen and (max-width: 600px)': {
      marginBottom: theme.spacing(2),
    },
  },
  dropdown: {
    '@media only screen and (max-width: 600px)': {
      justifyContent: 'flex-start',
    },
  },
}));

interface Props {
  onSearch: Dispatch<SetStateAction<string>>;
  term: string;
  countries: CountryProps[];
  fetchByRegion: (code: string) => Promise<void>;
}

function Main({ onSearch, term, countries, fetchByRegion }: Props) {
  const styles = useStyles();

  const renderCountries = (): JSX.Element => {
    if (countries.length) {
      return (
        <Container className={styles.root} maxWidth="xl">
          <Container>
            <Grid container>
              <Grid item xs={12} sm={6} md={9} className={styles.searchBox}>
                <Search onSearch={onSearch} term={term} />
              </Grid>

              <Grid
                item
                xs={12}
                sm={6}
                md={3}
                container
                justify="flex-end"
                className={styles.dropdown}
              >
                <Dropdown onSelect={fetchByRegion} />
              </Grid>
            </Grid>
          </Container>

          <Container className={styles.countries}>
            <Grid container spacing={6}>
              {countries
                .filter((curr) =>
                  curr.name.toLowerCase().includes(term.toLowerCase())
                )
                .map((country: CountryProps) => {
                  return (
                    <Grid item xs={12} sm={6} md={3} key={country.alpha3Code}>
                      <Country country={country} />
                    </Grid>
                  );
                })}
            </Grid>
          </Container>
        </Container>
      );
    }
    return <MainSkeleton />;
  };

  return renderCountries();
}

export { Main };
