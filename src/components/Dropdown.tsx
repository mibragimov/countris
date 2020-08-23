import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    formControl: {
      backgroundColor: theme.palette.secondary.main,
      minWidth: 150,
      padding: theme.spacing(1),
      borderRadius: '5px',
    },
    selectEmpty: {
      paddingLeft: '10px',
    },
  })
);

interface Props {
  onSelect: (region: string) => Promise<void>;
}

function Dropdown({ onSelect }: Props) {
  const classes = useStyles();
  const [region, setRegion] = React.useState('');
  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setRegion(event.target.value as string);
    onSelect(event.target.value as string);
  };

  return (
    <Paper>
      <FormControl className={classes.formControl}>
        <Select
          value={region}
          onChange={handleChange}
          displayEmpty
          className={classes.selectEmpty}
          disableUnderline
        >
          <MenuItem value="" disabled>
            Filter by Region
          </MenuItem>
          <MenuItem value="africa">Africa</MenuItem>
          <MenuItem value="americas">America</MenuItem>
          <MenuItem value="asia">Asia</MenuItem>
          <MenuItem value="europe">Europe</MenuItem>
          <MenuItem value="oceania">Oceania</MenuItem>
        </Select>
      </FormControl>
    </Paper>
  );
}

export { Dropdown };
