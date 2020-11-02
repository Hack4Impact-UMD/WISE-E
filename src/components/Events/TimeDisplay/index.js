import React from 'react';
import { Box } from '@material-ui/core';
import EventIcon from '@material-ui/icons/Event';

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
    return `${dateStr}, ${startTimeStr}-${endTimeStr}`;
  } else {
    const startDateStr = startDate.toLocaleString(locale, { ...dateOptions, ...timeOptions });
    const endDateStr = endDate.toLocaleString(locale, { ...dateOptions, ...timeOptions });
    return `${startDateStr} - ${endDateStr}`;
  }
}

export default function TimeDisplay({ startTime, endTime }) {

  if (!startTime || !endTime) {
    return <></>
  }

  return (
    < Box display="flex" flexDirection="row" mb={1} >
      <Box mr={1}><strong><EventIcon /></strong></Box>
      <em>{dateRangeToString(new Date(startTime), new Date(endTime))}</em>
    </Box >
  );
}