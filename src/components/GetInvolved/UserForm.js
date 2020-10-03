import React from 'react'
import { TextField, Button } from '@material-ui/core';

const UserForm = (props) => {
  return (
    <>
      <TextField
        placeholder="Enter Your First Name"
        label="First Name"
        onChange={(e) => props.handleChange("firstName", e)}
        margin="normal"
        fullWidth
      />
      <br />
      <TextField
        placeholder="Enter Your Last Name"
        label="Last Name"
        onChange={(e) => props.handleChange("lastName", e)}
        margin="normal"
        fullWidth
      />
      <br />
      <TextField
        placeholder="Enter Your Email"
        label="Email"
        onChange={(e) => props.handleChange("email", e)}
        margin="normal"
        fullWidth
      />
      <br />
      <TextField
        placeholder=""
        label="How Did You Hear About Us"
        onChange={(e) => props.handleChange("hearAboutUs", e)}
        margin="normal"
        fullWidth
      />
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
      >Continue</Button>
    </>
  )
}

export default UserForm;
