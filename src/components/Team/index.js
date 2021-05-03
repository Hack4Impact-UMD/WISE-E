import React from "react";
import { Container, makeStyles, Typography } from "@material-ui/core";
import msg from "./sampleData.json";
import CardTemplate from "./CardTemplate";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Carousel from "react-material-ui-carousel";
import CardMedia from '@material-ui/core/CardMedia';


const useStyles = makeStyles({
  title: {
    textAlign: "center",
  },
  list: {
    listStyleType: "none",
  },
  cardContent: {
    margin: "15px",
  },
  sideBySide: {
    display: "flex",
  },
  teamPicture: {
    width: "650px",
    margin: "10px",
  },
  Card: {
    height: "550px",
  },
  media: {
    height: 0,
    paddingTop: '100%', 
  },
});

const affiliatedNames = [
  {
    name: "Dr. Camellia Okpodu",
    position: "Dean of the School of Arts and Science at Xavier University",
    imageUrl: "./static/Camellia.jpg"
  },
  {
    name: "Kanisha Ahmed",
    position: "Earth Science Student at Georgia Institute of Technology",
    imageUrl: "./static/Kanisha.jpg"
  },{
    name: "Ashanti Kincannon",
    position: "Earth and Environmental Science Student at Virginia Wesleyan University",
    imageUrl: "./static/Ashanti.jpg"
  },{ 
    name: "Maya Rajan", 
    position: "Computer Science Student at Georgia Institute of Technology" ,
    imageUrl: "./static/Maya.jpg"
  },{
    name: "Juliet Hall",
    position: " Advisor & Leadership Consultant at Juliet Hall, Inc. ",
    imageUrl: "./static/Juliet.jpg"
  },
];


const advisoryNames = [
  {
    name: "Rusty Low",
    position: "Senior Scientist at Institute for Global Environmental Strategies",
    imageUrl: "./static/Rusty.png"
    // Dr. Rusanne Low is the epitome of the modern Earth scientist. She’s not only a leader in geoscience education, but she works at the forefront of citizen science and its application for vector-borne diseases such as Zika. Working through NASA, NSF, and USAID projects in Brazil and Peru, Rusty is demonstrating how educators, students, public health officials, citizens and even space scientists can work together to identify mosquito larvae and develop critical mitigation strategies to reduce the outbreak of Zika.
  },
  {
    name: "Jessica Taylor",
    position: "Physical Scientist at NASA Langley Research Center",
    imageUrl: "./static/Jessica.png"
    // Jessica Taylor is a Physical Scientist at NASA's Langley Research Center.   She serves as Lead trainer for the GLOBE Atmosphere Training Center of Excellence and is the Education and Public Outreach lead for the CALIPSO mission.  Jessica serves Chair for the GLOBE Education Working Group.
    // Jessica's participation in GLOBE began in 2001 at Florida State University where she took regular atmosphere measurements and trained teachers through their Partnership.  Now at NASA, Jessica coordinates GLOBE Workshops as integrated outreach efforts for several NASA Missions including CALIPSO, DISCOVER-AQ, SEAC4RS, and SAGE III on ISS.  She recently served on several GLOBE committees including: GLOBE Atmosphere Refresh Panel, GLOBE Virtual Training Committee, and Student Climate Research Campaign Phase 2 Advisory Committee.  She participated in the GLOBE/NGSS collaborations and the GLOBE Annual 2013 Meeting Planning Committee.
    //  Jessica has worked in various formal and informal science education programs including: EXPLORES!, a satellite education program; REALM, a science outreach program for middle school girls; the Challenger Learning Center; and most recently as a curriculum developer and professional development lead for the College of William and Mary's STEM Education Alliance.  She has also taught Introduction to Meteorology and Teaching Earth and Space Science at Florida State University.  Jessica also has experience with federal and state educational policy as Program Director for the Florida Department of Education, working with Title I programs, after school services, and parental involvement. 
  },
  {
    name: "Mona Ray",
    position: "Associate Professor at Morehouse College Department of Economics",
    imageUrl: "./static/Mona.jpg"
  },{ 
    name: "Garry Harris", 
    position: "Director at the Center of Sustainable Communities" ,
    imageUrl: "./static/Garry.jpg"
  }
];

const sampleTeamPic =
  "https://ak.picdn.net/shutterstock/videos/4858514/thumb/4.jpg";

const Team = () => {
  const classes = useStyles();
  return (
    <Container>
      <div>
        <div className={classes.sideBySide}>
          <div>
            <h1 className={classes.title}>Meet Our Team</h1>
            <Typography variant="body1">
            Our team comes from a variety of backgrounds in industry, activism, and academia and are
            working together to bridge the gender gap in science, technology, mathematics, and engineering. 
            The members are located across the country and collaborates with their
            unique expertise and experience to provide a resource center for girls and women who are in STEM and who aspire to be, including 
            through fellowships, internships, networking, leadership, and more. 
            </Typography>
          </div>
          <img src={sampleTeamPic} alt="team" className={classes.teamPicture} />
        </div>
      </div>

      <br />
      {/**still not sure what type of animation for carousel */}
      {/* <Carousel interval={4000} timeout={500} animation={"fade"}>
        {msg.samplePeople.map((person) => (
          <CardTemplate
            name={person.name}
            imageURL={person.imageURL}
            description={person.description}
            position={person.position}
            alt={person.alt}
            email={person.email}
          />
        ))}
      </Carousel> */}

      <br />
      <center>
        <h2>Team</h2>
      </center>
      <Container>
        <Grid container spacing={3}>
          {affiliatedNames.map((item) => {
            return (
              <Grid item md={4}>
                <Card className={classes.Card}>
                <CardMedia
                  className={classes.media}
                  image={require(""+item.imageUrl)}
                  title={item.name}
                  />
                  <CardContent className={classes.cardContent}>
                    <h3>{item.name}</h3>
                    <p>{item.position}</p>
                  </CardContent>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Container>

      <br/><br/><br/>
      <center>
        <h2>Advisory Team</h2>
      </center>

      <Container>
      <Grid container spacing={3}>
          {advisoryNames.map((item) => {
            return (
              <Grid item md={4}>
                <Card className={classes.Card}>
                <CardMedia
                  className={classes.media}
                  image={require(""+item.imageUrl)}
                  title={item.name}
                  />
                  <CardContent className={classes.cardContent}>
                    <h3>{item.name}</h3>
                    <p>{item.position}</p>
                  </CardContent>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Container>

    </Container>
  );
};

export default Team;

