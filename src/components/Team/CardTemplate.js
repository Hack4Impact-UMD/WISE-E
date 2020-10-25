import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

const useStyles = makeStyles({
  root: {
    maxWidth: 700,
    margin: "auto",
  },
  link: {
    textDecoration: "none",
  },
  flex: {
    display: "flex",
  },
  img: {
    width: 200,
    height: 250,
    margin: 30
  },
});

function CardTemplate(props) {
  const classes = useStyles();

  return (
    <div>
      <Card className={classes.root}>
        <>
          <div className={classes.flex}>
            <div>
              <img
                src={props.imageURL}
                alt={props.alt}
                className={classes.img}
              />
            </div>
            <CardContent>
              <h1>{props.name}</h1>
              <h2>{props.position}</h2>
              <a href={props.email} className={classes.link}>
                <h4>{props.email}</h4>
              </a>
              <p>{props.description}</p>
            </CardContent>
          </div>
        </>
      </Card>
    </div>
  );
}

export default CardTemplate;
