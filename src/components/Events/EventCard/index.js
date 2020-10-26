import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardContent, Box, Grid, Link } from '@material-ui/core';
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
 * Info card for a single event
 * 
 * @param {*} param0 
 */
export default function EventCard({ title, imageURI, startTime, endTime, location, link, content }) {

  const classes = useStyles();

  const startDate = new Date(startTime);
  const endDate = new Date(endTime);

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
              <Box>
                <h2>
                  <Link href={link}>{title}</Link>
                </h2>
                <em>{startDate.toDateString()} - {endDate.toDateString()}{location ? ` - ${location}` : ''}</em>
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