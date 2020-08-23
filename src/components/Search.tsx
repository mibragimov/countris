import React, { Dispatch, SetStateAction } from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import SearchIcon from '@material-ui/icons/Search';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      maxWidth: 450,
    },
    input: {
      backgroundColor: theme.palette.secondary.main,
      borderRadius: '5px',
      padding: theme.spacing(1),
    },
  })
);

interface Props {
  onSearch: Dispatch<SetStateAction<string>>;
  term: string;
}

function Search({ onSearch, term }: Props) {
  const classes = useStyles();

  return (
    <Paper className={classes.paper}>
      <TextField
        value={term}
        onChange={(e) => onSearch(e.target.value)}
        className={classes.input}
        placeholder="Search for a country..."
        fullWidth
        InputProps={{
          disableUnderline: true,
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />
    </Paper>
  );
}

export { Search };
