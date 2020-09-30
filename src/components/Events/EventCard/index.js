import React from 'react';
import { Card, CardContent, Box, Grid, Link } from '@material-ui/core';
import noImage from './noImage.png';
import styles from './styles.module.css';

/**
 * Info card for a single event
 * 
 * @param {*} param0 
 */
const EventCard = ({ event }) => {
    return (
        <Box m={4}>
            <Card variant="outlined" className={styles['card']}>
                <Grid container direction="row">
                    <Grid container item md={3}>
                        <img className={styles['card-img']} src={event.imageURI ? event.imageURI : noImage} />
                    </Grid>
                    <Grid container item md={9}>
                        <CardContent className={styles['card-content']}>
                            <Box>
                                <h2>
                                    <Link href={event.link}>{event.title}</Link>
                                </h2>
                                <span>
                                    <em>{event.date.toDateString()}{event.location ? ` - ${event.location}` : ''}</em>
                                </span>
                                <p>{event.content}</p>
                            </Box>
                        </CardContent>
                    </Grid>
                </Grid>
            </Card>
        </Box>
    );
}
export default EventCard;