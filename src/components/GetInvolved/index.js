import React, {useState} from 'react';
import { Container} from '@material-ui/core';
import UserForm from './UserForm';
import Confirm from './Confirm';
import Success from './Success';

const GetInvolved = () => {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [hearAboutUs, setHearAboutUs] = useState("")

    const [step, setStep] = useState(1)

    const nextStep = () => {
        setStep(step + 1)
    }

    const prevStep = () => {
        setStep(step - 1)
    }

    const handleChange = (input, e) => {
        // eslint-disable-next-line default-case
        switch (input) {
            case "firstName": 
                setFirstName(e.target.value);
                break;
            case "lastName": 
                setLastName(e.target.value);
                break;
            case "email": 
                setEmail(e.target.value);
                break;
            case "hearAboutUs": 
                setHearAboutUs(e.target.value);
                break;
        }
    } 

    const inputValues = { firstName, lastName, email, hearAboutUs}

    switch (step) {
        case 1: 
            return (
                <Container maxWidth="sm">
                    <h1>Get Involved</h1>
                    <UserForm 
                        handleChange={(input, e) => handleChange(input, e)}
                        nextStep={() => nextStep()}
                        prevStep={() => prevStep()}
                    />
                </Container>
            );
        
        case 2: 
            return (
                <Container maxWidth="sm">
                    <h1>Get Involved</h1>
                    <Confirm 
                        inputValues={inputValues}
                        nextStep={() => nextStep()}
                        prevStep={() => prevStep()}
                    />
                </Container>
            );
        
        case 3: 
            return (
                <Container maxWidth="sm">
                    <h1>Get Involved</h1>
                    <Success/>
                </Container>
            );

        default:
            return (
                <Container maxWidth="sm">
                    <h1>Get Involved</h1>
                </Container>
            );
    }
    
}

export default GetInvolved;