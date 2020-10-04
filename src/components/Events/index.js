import React, { useState, useEffect } from 'react';
import { Container, TablePagination, Select, Box, Grid } from '@material-ui/core';
import EventCard from './EventCard';

import { dummyEvents } from './dummyData';

const rowsPerPage = 2;

/**
 * Events page
 */
const Events = () => {

  const [events, setEvents] = useState([]);
  const [page, setPage] = useState(0);
  const [sortingOption, setSortingOption] = useState('')

  useEffect(() => {
    // TODO: receive events from CMS
    dummyEvents.sort((e1, e2) => e1.date < e2.date);
    setEvents(dummyEvents);
  }, []);

  /**
   * Sorts events by option
   * @param {*} option 
   */
  const sortEvents = (option) => {
    switch (option) {
      case 'latest':
        // Sort by most recent event
        setEvents(prev => {
          prev.sort((e1, e2) => e1.date < e2.date);
          return prev;
        });
        setSortingOption('latest');
        break;
      case 'alphabet':
        // Sort by alphabetical
        setEvents(prev => {
          prev.sort((e1, e2) => e1.title > e2.title);
          return prev;
        });
        setSortingOption('alphabet');
        break;
      default:
        // no-op
        break;
    }
  }

  return (
    <Container>

      <h1>Upcoming Events</h1>

      <Grid container direction="row">
        <Grid container item justify="flex-end" lg={10}>
          <Box display="flex" alignItems="center">
            <Box mr={2}>
              <span>Sort by:</span>
            </Box>
            <Select
              native
              value={sortingOption}
              onChange={e => sortEvents(e.target.value)}
            >
              <option value="latest">Latest</option>
              <option value="alphabet">Alphabetical</option>
            </Select>
          </Box>
        </Grid>
        <Grid container item justify="flex-end" lg={2}>
          <TablePagination
            component="div"
            count={events.length}
            page={page}
            onChangePage={(_, page) => setPage(page)}
            rowsPerPage={rowsPerPage}
            rowsPerPageOptions={[rowsPerPage]}
          />
        </Grid>
      </Grid>

      {
        events.slice(page * rowsPerPage, (page + 1) * rowsPerPage)
          .map(event => <EventCard event={event} key={event.id} />)
      }

    </Container >
  );
}

export default Events;