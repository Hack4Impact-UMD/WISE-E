import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Box, Modal, Card, CardContent, IconButton } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import TimeDisplay from '../TimeDisplay';
import LocationDisplay from '../LocationDisplay';

const useStyles = makeStyles({
  card: {
    width: '100%',
  }
});

export default function DetailModal({ event, open, onClose }) {

  const classes = useStyles();

  const { title, startTime, endTime, location, content } = event;

  return (
    <Modal
      open={open}
      onClose={onClose}
    >
      <Container maxWidth="md">
        <Box display="flex" justifyContent="center" mt={5}>
          <Card className={classes.card}>
            <CardContent>

              <Box display="flex" justifyContent="end">
                <IconButton onClick={onClose}>
                  <CloseIcon />
                </IconButton>
              </Box>

              <h1>{title}</h1>

              <LocationDisplay location={location} />
              <TimeDisplay startTime={startTime} endTime={endTime} />

              {/* TODO: Assuming paragraph content for now. Will be replaced with Contentful rich text renderer. */}
              <p>{content}</p>
            </CardContent>
          </Card>
        </Box>
      </Container>
    </Modal>
  );
}