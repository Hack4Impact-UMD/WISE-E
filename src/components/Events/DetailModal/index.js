import React from 'react';
import { Container, Box, Dialog, IconButton } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import TimeDisplay from '../TimeDisplay';
import LocationDisplay from '../LocationDisplay';

export default function DetailModal({ event, open, onClose }) {

  const { title, startTime, endTime, location, content } = event;

  return (
    <Dialog
      open={open}
      onClose={onClose}
      scroll="body"
      BackdropComponent={Backdrop}
      BackdropProps={{ timeout: 300 }}
    >
      <Fade in={open}>
        <Container maxWidth="md">
          <Box display="flex" flexDirection="column" justifyContent="center" pt={3} pb={5} px={3}>
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
          </Box>
        </Container>
      </Fade>
    </Dialog>
  );
}