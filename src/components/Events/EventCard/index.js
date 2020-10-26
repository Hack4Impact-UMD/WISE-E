import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardContent, Box, Grid, Link } from '@material-ui/core';
import EventIcon from '@material-ui/icons/Event';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import noImage from './noImage.png';

const useStyles = makeStyles({
  cardImg: {
    width: '100%',
    objectFit: 'cover',
    maxHeight: '20vmax',
  },
  cardContent: {
    height: '15vmax',
    width: '100%',
    overflowY: 'auto',
  }
});

/**
 * Formats date range as string
 * 
 * @param {Date} startDate 
 * @param {Date} endDate 
 */
function dateRangeToString(startDate, endDate) {
  const locale = 'en-US';
  const dateOptions = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' };
  const timeOptions = { hour: '2-digit', minute: '2-digit' };

  // Check if dates are equal
  if (startDate.toDateString() === endDate.toDateString()) {
    const dateStr = startDate.toLocaleDateString(locale, dateOptions);
    const startTimeStr = startDate.toLocaleTimeString(locale, timeOptions);
    const endTimeStr = endDate.toLocaleTimeString(locale, timeOptions);
    return `${dateStr} ${startTimeStr}-${endTimeStr}`;
  } else {
    const startDateStr = startDate.toLocaleString(locale, {...dateOptions, ...timeOptions});
    const endDateStr = endDate.toLocaleString(locale, {...dateOptions, ...timeOptions});
    return `${startDateStr} - ${endDateStr}`;
  }
}

/**
 * Info card for a single event
 * 
 * @param {*} param0 
 */
export default function EventCard({ title, imageURI, startTime, endTime, location, link, content }) {

  const classes = useStyles();

  return (
    <Box m={4}>
      <Card variant="outlined">
        <Grid container direction="row">

          <Grid container item md={3}>
            <img
              className={classes.cardImg}
              src={imageURI ? imageURI : noImage}
              alt={title}
            />
          </Grid>

          <Grid container item md={9}>
            <CardContent className={classes.cardContent}>
              <Box display="flex" flexDirection="column">

                <h2><Link href={link}>{title}</Link></h2>

                {startTime && endTime
                  ? (
                    <Box display="flex" flexDirection="row" mb={1}>
                      <Box mr={1}><strong><EventIcon /></strong></Box>
                      <em>{dateRangeToString(new Date(startTime), new Date(endTime))}</em>
                    </Box>
                  )
                  : <></>
                }
                {location
                  ? (
                    <Box display="flex" flexDirection="row" mb={1}>
                      <Box mr={1}><strong><LocationOnIcon /></strong></Box>
                      <em>{location}</em>
                    </Box>
                  )
                  : <></>}

                {/* TODO: Assuming paragraph content for now. Will be replaced with Contentful rich text renderer. */}
                <p>{content}</p>

              </Box>
            </CardContent>
          </Grid>
        </Grid>
      </Card>
    </Box>
  );
}