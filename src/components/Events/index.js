import React from 'react';
import { Container } from '@material-ui/core';
import EventCard from './EventCard';

const placeholderEvents = [
    {
        title: 'Event 1',
        date: new Date('2020-09-30'),
        content: 'This is an event',
    },
    {
        title: 'Event 2',
        date: new Date('2020-09-10'),
        content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua. Quam vulputate dignissim suspendisse in est. At lectus urna duis convallis
        convallis tellus id interdum. Neque volutpat ac tincidunt vitae. Ipsum faucibus vitae aliquet nec ullamcorper
        sit amet risus nullam. Nullam ac tortor vitae purus faucibus. Faucibus purus in massa tempor. Proin fermentum leo
        vel orci porta non pulvinar neque laoreet. Viverra adipiscing at in tellus. Morbi tristique senectus et netus et
        malesuada fames ac. Enim nec dui nunc mattis. Pellentesque id nibh tortor id aliquet lectus proin nibh. Accumsan
        lacus vel facilisis volutpat est velit egestas dui. Vitae semper quis lectus nulla at. Cursus turpis massa tincidunt
        dui ut ornare lectus. Non nisi est sit amet facilisis.`,
    },
    {
        title: 'Event 3',
        date: new Date('2020-01-03'),
        content: 'This is also an event',
    },
];

/**
 * Events page
 */
const Events = () => {
    return (
        <Container>
            <h1>Upcoming Events</h1>
            {placeholderEvents.map(event => <EventCard event={event} />)}
        </Container>
    );
}

export default Events;