import React, { useState, useEffect } from 'react';
import { Container } from '@material-ui/core';
import EventCard from './EventCard';
import Pagination from './Pagination';
import DetailModal from './DetailModal';
import { dummyEvents } from './dummyData';

const rowsPerPage = 2;

/**
 * Events page
 */
export default function Events() {

  const [events, setEvents] = useState([]);
  const [page, setPage] = useState(0);
  const [sortingOption, setSortingOption] = useState('latest');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalEvent, setModalEvent] = useState({});

  useEffect(() => {
    // TODO: receive events from CMS
    setEvents(dummyEvents);
  }, []);

  useEffect(() => {
    switch (sortingOption) {
      case 'latest':
        // Sort by most recent event
        // TODO: sort on start time using ISO string for now
        setEvents(prev => [...prev].sort((e1, e2) => e1.startTime > e2.startTime));
        break;
      case 'alphabet':
        // Sort by alphabetical
        setEvents(prev => [...prev].sort((e1, e2) => e1.title > e2.title));
        break;
      default:
        // Invalid option is no-op
        break;
    }
  }, [sortingOption]);


  const openModal = event => {
    setModalEvent(event);
    setIsModalOpen(true);
  }

  return (
    <Container>
      <h1>Upcoming Events</h1>

      <Pagination
        eventsCount={events.length}
        sortingOption={sortingOption}
        setSortingOption={setSortingOption}
        rowsPerPage={rowsPerPage}
        page={page}
        setPage={setPage}
      />
      {
        events.slice(page * rowsPerPage, (page + 1) * rowsPerPage)
          .map(event => (
            <EventCard
              key={event.id}
              event={event}
              openModal={() => openModal(event)}
            />
          ))
      }
      <Pagination
        eventsCount={events.length}
        sortingOption={sortingOption}
        setSortingOption={setSortingOption}
        rowsPerPage={rowsPerPage}
        page={page}
        setPage={setPage}
      />

      <DetailModal
        event={modalEvent}
        open={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </Container>
  );
}