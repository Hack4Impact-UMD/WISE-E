import React from 'react';
import { Container, makeStyles } from '@material-ui/core';
import earth from './earth.jpg'

const useStyles = makeStyles({
    headerImage: {
        width: "650px",
        margin:"10px"
    }
})

const About = () => {
    const classes = useStyles(); 

    return (
        <Container>
            {/* <img src={require('./earth.jpg')} alt="earth image"/> */}
            <img src={earth} alt="earth image" className={classes.headerImage}/>
            <h1>About</h1>
            <p>The Women in Science, Energy, and the Environment (WISE.E) initiative is a program of the Center for Sustainable Communities (CSC). WISE.E is based in Georgia and has a national footprint of educational programs whose mission is to recruit, engage, and sustain women and girls in STEM fields. By connecting women to professional networks, grant opportunities, and events where they can meet like-minded professionals, WISE.E aims to support a historically under resourced population in these industries and encourage involvement.
            </p>
        </Container>
    );
}

export default About;