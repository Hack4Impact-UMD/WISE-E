import React from "react";
import { Container, makeStyles } from "@material-ui/core";
import msg from "./sampleData.json";
import CardTemplate from "./CardTemplate";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles({
  title: {
    textAlign: "center",
  },
  list: {
    listStyleType: "none",
  },
});

const dummyAffiliated = [
  { name: "Spencer" },
  { name: "Katherine" },
  { name: "Daisy" },
  { name: "Paul" },
  { name: "Abby" },
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

      {/**Still need to figure out how to make these name apepar in a grid */}
      <h2>Others Involved</h2>
      <Container>
        <Grid contanier spacing={3}>
          {dummyAffiliated.map((item) => {
            return (
              <Grid item md={4}>
                  {/**might make this a card to add hover effect */}
                <div>{item.name}</div>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </Container>
  );
};

export default Team;
