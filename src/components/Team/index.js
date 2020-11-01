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
});

const dummyAffiliated = [
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

const Team = () => {
  const classes = useStyles();
  return (
    <Container>
      <h1 className={classes.title}>Meet Our Team</h1>
      <br />
      <CardTemplate
        name={msg.Person1.name}
        imageURL={msg.Person1.imageURL}
        description={msg.Person1.description}
        position={msg.Person1.position}
        alt={msg.Person1.alt}
        email={msg.Person1.email}
      />

      <center><h2>Others Involved</h2></center>
      <Container>
        <Grid container spacing={3}>
          {dummyAffiliated.map((item) => {
            return (
              <Grid item md={4}>
                {/**might make this a card to add hover effect */}
                <Card class>
                  <CardContent className={classes.cardContent}>
                    <h2>{item.name}</h2>
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
