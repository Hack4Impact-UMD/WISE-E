import React from 'react';
import { TablePagination, Select, Box, Grid } from '@material-ui/core';

/**
 * Events pagination controller
 * 
 * @param {*} param0 
 */
export default function Pagination({ eventsCount, sortingOption, setSortingOption, rowsPerPage, page, setPage }) {
  return (
    <Grid container direction="row">
      <Grid container item justify="flex-end" lg={10}>
        <Box display="flex" alignItems="center">
          <Box mr={2}>
            <span>Sort by:</span>
          </Box>
          <Select
            native
            value={sortingOption}
            onChange={e => setSortingOption(e.target.value)}
          >
            <option value="latest">Latest</option>
            <option value="alphabet">Alphabetical</option>
          </Select>
        </Box>
      </Grid>
      <Grid container item justify="flex-end" lg={2}>
        <TablePagination
          component="div"
          count={eventsCount}
          page={page}
          onChangePage={(_, page) => setPage(page)}
          rowsPerPage={rowsPerPage}
          rowsPerPageOptions={[rowsPerPage]}
        />
      </Grid>
        {/* <div>&nbsp;</div> */}
    </Grid>
  );
}