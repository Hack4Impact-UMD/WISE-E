import React from "react";
import { Container, makeStyles } from "@material-ui/core";
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
  },{ 
    name: "Garry Harris", 
    position: "Director at the Center of Sustainable Communities" ,
    imageUrl: "./static/Garry.jpg"
  },{ 
    name: "Belinda Hankins", 
    position: "Retired, Senior Executive at AT&T" ,
    imageUrl: "./static/Belinda.jpg"
  },{
    name: "Kanisha Ahmed",
    position: "Earth Science Student at Georgia Institute of Technology",
    imageUrl: "./static/Kanisha.jpg"
  },{
    name: "Ashanti Kincannon",
    position: "Earth and Environmental Science Student at Virginia Wesleyan University",
    imageUrl: "./static/Ashanti.jpg"
  },{
    name: "Juliet Hall",
    position: " Advisor & Leadership Consultant at Juliet Hall, Inc. ",
    imageUrl: "./static/Juliet.jpg"
  },
];

const sampleTeamPic =
  "https://cdn.vox-cdn.com/thumbor/Ndb49Uk3hjiquS041NDD0tPDPAs=/0x169:1423x914/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/7342855/microsoftteams.0.jpg";

const Team = () => {
  const classes = useStyles();
  return (
    <Container>
      <div>
        <div className={classes.sideBySide}>
          <div>
            <h1 className={classes.title}>Meet Our Team</h1>
            <p>
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum."
            </p>
          </div>
          <img src={sampleTeamPic} alt="team" className={classes.teamPicture} />
        </div>
      </div>

      <br />
      {/**still not sure what type of animation for carousel */}
      <Carousel interval={4000} timeout={500} animation={"fade"}>
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
      </Carousel>

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
    </Container>
  );
};

export default Team;

