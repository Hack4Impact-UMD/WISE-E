import React from 'react';
import { Card, CardContent, Box } from '@material-ui/core';
import styles from './styles.module.css';
import placeholder from './placeholder.jpg';

/**
 * Info card for a single event
 * 
 * @param {*} param0 
 */
const EventCard = ({ event }) => {
    return (
        <Box m={4}>
            <Card variant="outlined">
                <Box display="flex">
                    <Box flexShrink={0} className={styles['card-img-container']}>
                        <img className={styles['card-img']} src={placeholder} />
                    </Box>
                    <CardContent className={styles['card-content']}>
                        <Box>
                            <h2>{event.title}</h2>
                            <em>{event.date.toDateString()}</em>
                            <p>{event.content}</p>
                        </Box>
                    </CardContent>
                </Box>
            </Card>
        </Box>
    );
}
export default EventCard;