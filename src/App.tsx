import React from 'react';
import { Route } from 'react-router-dom';
import axios from 'axios';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core';
import { light, dark } from './theme';
import { Header } from './components/Header';
import { Main } from './components/Main';
import { CountryDetail } from './components/CountryDetail';

export interface CountryProps {
  alpha3Code: string;
  flag: string;
  name: string;
  population: number;
  region: string;
  capital: string;
  nativeName: string;
  subregion: string;
  topLevelDomain: [];
  languages: [];
  currencies: [];
  borders: [];
}

function App() {
  const [darkTheme, setDarkTheme] = React.useState(false);
  const [countries, setCountries] = React.useState<CountryProps[]>([]);
  const [term, setTerm] = React.useState('');

  const toggleTheme = (): void => {
    if (darkTheme) {
      window.localStorage.setItem('theme', 'light');
      setDarkTheme(false);
    } else {
      window.localStorage.setItem('theme', 'dark');
      setDarkTheme(true);
    }
  };

  React.useEffect(() => {
    const localTheme = window.localStorage.getItem('theme');
    if (localTheme && localTheme === 'dark') {
      setDarkTheme(true);
    }
  }, []);

  React.useEffect(() => {
    async function fetchCountries(): Promise<void> {
      try {
        const { data } = await axios.get(
          'https://restcountries.eu/rest/v2/all'
        );
        setCountries(data);
      } catch (error) {
        console.log(error);
      }
    }
    if (!countries.length) {
      fetchCountries();
    }
  }, [countries.length]);

  async function fetchByRegion(region: string): Promise<void> {
    try {
      const { data } = await axios.get(
        `https://restcountries.eu/rest/v2/region/${region}`
      );
      setCountries(data);
    } catch (error) {
      console.log(error.message);
    }
  }

  return (
    <React.Fragment>
      <ThemeProvider theme={darkTheme ? dark : light}>
        <CssBaseline />
        <Header onThemeChange={toggleTheme} theme={darkTheme} />
        <Route
          exact
          path="/"
          render={() => (
            <Main
              countries={countries}
              onSearch={setTerm}
              term={term}
              fetchByRegion={fetchByRegion}
            />
          )}
        />
        <Route path="/:id" component={CountryDetail} />
      </ThemeProvider>
    </React.Fragment>
  );
}

export { App };
