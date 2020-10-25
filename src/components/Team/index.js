import React, { useEffect, useState } from "react";
import { Container, makeStyles } from "@material-ui/core";
import msg from "./sampleData.json";
import CardTemplate from "./CardTemplate";
import Grid from "@material-ui/core/Grid";

const contentful = require("contentful");

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

  const [teamMembers, setTeamMembers] = useState([])

  useEffect(() => {
    const client = contentful.createClient({
      // This is the space ID. A space is like a project folder in Contentful terms
      space: "a0k8g672nj45",
      // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
      accessToken: "qzmSC-AWWlEG7pZdRQ62jkfaQNQEFGBoAHK0AN0drBE"
    });
    client.getEntries({content_type: 'teamMember'}).then((response) => {
      setTeamMembers(response.items)
      console.log(response.items)
    })
  }, [])

  const members = teamMembers.map((member, i) => 
  <CardTemplate
    id={i}
    key={i}
    name={member.fields.name}
    imageURL={member.fields.profilePicture.fields.file.url}
    description={member.fields.description.content[0].content[0].value}
    position={member.fields.position}
    alt={member.fields.name}
    email={member.fields.email}
  />)

  return (
    <Container>
      <h1 className={classes.title}>Meet Our Team</h1>
      <br />
      {/* <CardTemplate
        name={msg.Person1.name}
        imageURL={msg.Person1.imageURL}
        description={msg.Person1.description}
        position={msg.Person1.position}
        alt={msg.Person1.alt}
        email={msg.Person1.email}
      /> */}
      {members}

      <h2>Others Involved</h2>
      <Container>
        <Grid container spacing={3}>
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
