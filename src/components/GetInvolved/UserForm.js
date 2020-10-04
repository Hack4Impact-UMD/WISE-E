import React from 'react'
import { TextField, Button } from '@material-ui/core';

const UserForm = (props) => {

  const handleContinue = (e) => {
    e.preventDefault() // removes warnings
    props.nextStep()
  }

  return (
    <>
      <form onSubmit={(e) => handleContinue(e)}>
        <TextField
          placeholder="Enter Your First Name"
          required 
          type="text"
          defaultValue={props.inputValues.firstName}
          id="first-name-field"
          label="First Name"
          onChange={(e) => props.handleChange("firstName", e)}
          margin="normal"
          fullWidth
        />
        <TextField
          placeholder="Enter Your Last Name"
          required 
          type="text"
          defaultValue={props.inputValues.lastName}
          id="last-name-field"
          label="Last Name"
          onChange={(e) => props.handleChange("lastName", e)}
          margin="normal"
          fullWidth
        />
        <TextField
          placeholder="Enter Your Email"
          required 
          type="email"
          defaultValue={props.inputValues.email}
          id="email-field"
          label="Email"
          onChange={(e) => props.handleChange("email", e)}
          margin="normal"
          fullWidth
        />
        <TextField
          placeholder=""
          required 
          type="text"
          defaultValue={props.inputValues.hearAboutUs}
          id="hear-about-us-field"
          label="How Did You Hear About Us"
          onChange={(e) => props.handleChange("hearAboutUs", e)}
          margin="normal"
          fullWidth
        />

        <Button
          color="primary"
          variant="contained"
          type="submit"
        >Continue</Button>
      </form>
    </>
  )
}

export default UserForm;
