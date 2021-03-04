import React from 'react';
import debounce from 'lodash/debounce';
import {
  Checkbox,
  FormControlLabel,
  InputAdornment,
  TextField,
  makeStyles,
  Grid,
} from '@material-ui/core';

import useProductSearch from 'store/products-search/useProductsSearch';
import { ReactComponent as Search } from 'assets/icons/search.svg';

const useStyles = makeStyles(() => ({
  textField: {
    minWidth: 300,
  },
}));

const ProductFilters = () => {
  const { filters, setFilters } = useProductSearch();

  const debouncedSetFilters = React.useRef(
    debounce((q) => setFilters({ search: q }), 300)
  ).current;

  const classes = useStyles();

  return (
    <Grid spacing={2} alignItems="center" justify="space-between" container>
      <Grid xs={12} md="auto" item>
        <TextField
          className={classes.textField}
          id="search"
          margin="dense"
          variant="outlined"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <Search />
              </InputAdornment>
            ),
          }}
          placeholder="Search"
          defaultValue={filters.search ?? ''}
          onChange={(e) => debouncedSetFilters(e.target.value)}
          fullWidth
        />
      </Grid>

      <Grid item>
        <FormControlLabel
          control={
            <Checkbox
              name="active"
              color="primary"
              checked={filters.active ?? false}
              onChange={(e) =>
                setFilters({ active: e.currentTarget.checked || null })
              }
            />
          }
          label="Active"
        />

        <FormControlLabel
          control={
            <Checkbox
              name="promo"
              color="primary"
              checked={filters.promo ?? false}
              onChange={(e) =>
                setFilters({ promo: e.currentTarget.checked || null })
              }
            />
          }
          label="Promo"
        />
      </Grid>
    </Grid>
  );
};

export default ProductFilters;
