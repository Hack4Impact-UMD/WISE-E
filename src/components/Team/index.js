import React from "react";
import { Container, makeStyles } from "@material-ui/core";
import msg from "./sampleData.json";
import CardTemplate from "./CardTemplate";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

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
    height: "150px",
  }
});

const affiliatedNames = [
  {
    name: "Dr. Camellia Okpodu",
    position: "Dean of the School of Arts and Science at Xavier University",
  },
  { name: "Belinda Hankins", position: "Retired, Senior Executive at AT&T" },
  {
    name: "Ahmed Kanisha",
    position: "Earth Science Student at Georgia Institute of Technology",
  },
  {
    name: "Ashanti Kincannon",
    position:
      "Earth and Environmental Science Student at Virginia Wesleyan University",
  },
  {
    name: "Juliet Hall",
    position: " Advisor & Leadership Consultant at Juliet Hall, Inc. ",
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

      {/**To make carousel, would probably need to install another dependency */}
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

      <br />
      <center>
        <h2>Others Involved</h2>
      </center>
      <Container>
        <Grid container spacing={3}>
          {affiliatedNames.map((item) => {
            return (
              <Grid item md={4}>
                <Card className={classes.Card}>
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
