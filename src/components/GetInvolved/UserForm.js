import React from 'react'
import { TextField, Button, Select, InputLabel, FormControl } from '@material-ui/core';

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
        <FormControl 
          required 
          fullWidth 
          margin="normal"
          >
          <InputLabel htmlFor="select-native-required">How Would You Like To Get Involved</InputLabel>
          <Select 
            native
            id="get-involved-option-field"
            value={props.inputValues.getInvolvedOption}
            onChange={(e) => props.handleChange("getInvolvedOption", e)}
            fullWidth
          >
            <option aria-label="None" value="" disabled></option>
            <option value={"Become a member and be a part of our network"}>Become a member and be a part of our network</option>
            <option value={"Become a volunteer for a specific event"}>Become a volunteer for a specific event</option>
            <option value={"Learn more about WISE-E mission"}>Learn more about WISE-E mission</option>
            <option value={"Other"}>Other</option>
          </Select>
        </FormControl>

        <Button
          style={{ marginTop: "20px" }}
          color="primary"
          variant="contained"
          type="submit"
        >Continue</Button>
      </form>
    </>
  )
}

export default UserForm;
