import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardContent, Box, Grid, Button } from '@material-ui/core';
import TimeDisplay from '../TimeDisplay';
import LocationDisplay from '../LocationDisplay';
import noImage from './noImage.png';

const useStyles = makeStyles({
  cardImg: {
    width: '100%',
    height: '15vmax',
    objectFit: 'cover',
  },
  cardContent: {
    width: '100%',
  },
  detailContent: {
    height: '100%',
  },
  controlContent: {
    height: '100%',
  }
});

/**
 * Info card for a single event
 * 
 * @param {*} param0 
 */
export default function EventCard({ event, openModal }) {

  const classes = useStyles();

  const { title, imageURI, startTime, endTime, location, link } = event;

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
              <Box display="flex" flexDirection="column" className={classes.detailContent}>

                <h2>{title}</h2>

                <LocationDisplay location={location} />
                <TimeDisplay startTime={startTime} endTime={endTime} />
                
                <Box display="flex" flexDirection="row" justifyContent="end" alignItems="end" className={classes.controlContent}>
                  <Box mr={1}>
                    <Button variant="contained" onClick={() => openModal(event)}>Details</Button>
                  </Box>
                  <Button variant="contained" href={link}>Register</Button>
                </Box>
              </Box>
            </CardContent>
          </Grid>
        </Grid>
      </Card>
    </Box>
  );
}