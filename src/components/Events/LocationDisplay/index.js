import React from 'react';
import { Box } from '@material-ui/core';
import LocationOnIcon from '@material-ui/icons/LocationOn';

export default function LocationDisplay({ location }) {

  if (!location) {
    return <></>
  }

  return (
    <Box display="flex" flexDirection="row" mb={1} >
      <Box mr={1}><strong><LocationOnIcon /></strong></Box>
      <em>{location}</em>
    </Box>
  );
}