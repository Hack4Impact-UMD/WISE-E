import React from 'react'
import { List, ListItem, ListItemText, Button } from '@material-ui/core';

const Confirm = (props) => {
  const { firstName, lastName, email, hearAboutUs } = props.inputValues

  return (
    <>
      <List>
        <ListItem>
          <ListItemText primary="First Name" secondary={firstName} />
        </ListItem>
        <ListItem>
          <ListItemText primary="Last Name" secondary={lastName} />
        </ListItem>
        <ListItem>
          <ListItemText primary="Email" secondary={email} />
        </ListItem>
        <ListItem>
          <ListItemText primary="How Did You Hear About Us" secondary={hearAboutUs} />
        </ListItem>
      </List>
      <br />
      <Button
        color="secondary"
        variant="contained"
        onClick={() => props.prevStep()}
      >Back</Button>
      
      <Button
        color="primary"
        variant="contained"
        onClick={() => props.nextStep()}
      >Confirm</Button>
    </>
  )
}

export default Confirm;
