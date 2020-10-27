import React from 'react'
import { List, ListItem, ListItemText, Button } from '@material-ui/core';

const Confirm = (props) => {
  const { firstName, lastName, email, hearAboutUs, getInvolvedOption } = props.inputValues
  
  // put the form body in x-www-form-urlencoded format
  const formBody = "entry.2077980149=" + firstName + 
                   "&entry.1632250722=" + lastName + 
                   "&entry.30371003=" + email + 
                   "&entry.2040370053=" + hearAboutUs +
                   "&entry.2059737867=" + getInvolvedOption

  // Send form data to google forms once user confirms
  async function handleConfirm() {
    const url = `https://docs.google.com/forms/u/0/d/e/1FAIpQLSf4L4KHuASRhHKreTjd7mUj8f2CTAM7B8eQWQ4zuLxDwUKwTQ/formResponse`
    await fetch(url, {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
      },
      body: formBody
    })
    props.nextStep()
  }

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
        <ListItem>
          <ListItemText primary="How Would You Like To Get Involved" secondary={getInvolvedOption} />
        </ListItem>
      </List>
      <br />
      <Button
        style={{ marginTop: "20px" }}
        color="secondary"
        variant="contained"
        onClick={() => props.prevStep()}
      >Back</Button>
      
      <Button
        style={{ marginTop: "20px" }}
        color="primary"
        variant="contained"
        onClick={() => handleConfirm()}
      >Confirm</Button>
    </>
  )
}

export default Confirm;
